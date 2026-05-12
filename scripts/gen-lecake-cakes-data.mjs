/**
 * 从 .tmp_lecake.html 或线上列表解析商品，输出 src/data/lecakeCakes.ts
 * 用法：node scripts/gen-lecake-cakes-data.mjs
 */
import fs from 'fs';
import path from 'path';
import { pinyin } from 'pinyin-pro';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const OUT_FILE = path.join(ROOT, 'src', 'assets', 'convert.ts');
const TMP = path.join(ROOT, '.tmp_lecake.html');
const LIST_URL = 'https://www.lecake.com/company/cake-coupon-exchange.html';

function nameToLowerInitials(name) {
  const normalized = name
    .replace(/[·・．]/g, '')
    .replace(/[「」『』""''（）()【】［］\[\]]/g, '');
  const parts = [];
  for (const ch of [...normalized]) {
    if (/[a-zA-Z]/.test(ch)) {
      parts.push(ch.toLowerCase());
      continue;
    }
    if (/\p{Script=Han}/u.test(ch)) {
      const py = pinyin(ch, {
        pattern: 'first',
        toneType: 'none',
        type: 'string',
      });
      if (py && py[0]) parts.push(py[0].toLowerCase());
    }
  }
  return parts.join('').replace(/[^a-z0-9]/g, '') || 'x';
}

function parsePriceFromFirstSeg(firstSeg) {
  /** 字段里也会出现 `||`，只能按「第一个 ||」切开 */
  const sep = firstSeg.indexOf('||');
  if (sep < 0) return null;
  const rest = firstSeg.slice(sep + 2);
  if (!rest) return null;
  const f = rest.split('|');
  const yuan = f[13];
  const gram = f[18];
  if (yuan == null || gram == null) return null;
  const priceNum = Number(yuan);
  const weightNum = Number(gram);
  if (Number.isNaN(priceNum) || Number.isNaN(weightNum)) return null;
  return {
    priceYuan: priceNum,
    weightGram: weightNum,
    /** 与官网列表一致的展示文案 */
    price: `¥${priceNum}/约${weightNum}g`,
  };
}

function parseItems(html) {
  const items = [];
  const liRe =
    /<li[^>]*data-items='([^']+)'[^>]*>[\s\S]*?<img[^>]*data-original="(https:\/\/imagecdn\.lapetit\.cn[^"]+\.jpg)/g;
  let m;
  while ((m = liRe.exec(html)) !== null) {
    const block = m[1];
    const url = m[2].split('?')[0];
    const idMatch = url.match(/list_(\d+)\.jpg$/);
    const id = idMatch ? idMatch[1] : null;
    if (!id) continue;
    const firstSeg = block.split('@@')[0];
    const nameSep = firstSeg.indexOf('||');
    const name =
      nameSep >= 0 ? firstSeg.slice(0, nameSep).trim() : firstSeg.trim();
    const priceInfo = parsePriceFromFirstSeg(firstSeg);
    if (!items.some((x) => x.id === id)) {
      items.push({ name, id, url, priceInfo });
    }
  }
  return items;
}

async function getHtml() {
  if (fs.existsSync(TMP)) {
    return fs.readFileSync(TMP, 'utf8');
  }
  const res = await fetch(LIST_URL, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    },
  });
  if (!res.ok) throw new Error(`列表页 HTTP ${res.status}`);
  return res.text();
}

function buildRecords(items) {
  return items.map((it) => {
    const initials = nameToLowerInitials(it.name);
    const imageName = `${initials}.jpg`;
    const p = it.priceInfo || { price: '¥0/约0g' };
    return {
      name: it.name,
      img: `/dessert/${imageName}`,
      price: p.price,
    };
  });
}

function toTsFile(records) {
  const json = JSON.stringify(records, null, 2);
  return `/** 来源：诺心蛋糕甄选列表页（解析生成，非实时接口） */\nexport type convertCakeItem = {\n  /** 商品名称 */\n  name: string;\n  /** 站内静态路径 */\n  img: string;\n  /** 列表价展示，如 ¥218/约454g */\n  price: string;\n};\n\nexport const convertCakesList: convertCakeItem[] = ${json};\n`;
}

async function main() {
  const html = await getHtml();
  const items = parseItems(html);
  if (!items.length) {
    console.error('未解析到商品');
    process.exit(1);
  }
  const records = buildRecords(items);
  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, toTsFile(records), 'utf8');
  console.log(`已写入 ${records.length} 条 -> ${OUT_FILE}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
