/**
 * 从诺心「蛋糕甄选」列表页抓取商品列表图，保存到 public/cake。
 * 文件命名：商品中文名小写拼音首拼 + 下划线 + 列表图 ID，如 xynrzs_28696.jpg，
 * 避免首拼过短（如 byg）与站内其它静态图重名覆盖。
 */
import fs from 'fs';
import path from 'path';
import { pinyin } from 'pinyin-pro';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'convert');
const LIST_URL = 'https://www.lecake.com/company/cake-coupon-exchange.html';

/** 商品名 → 小写拼音首拼（仅汉字、字母参与；标点、间隔号等跳过） */
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
  const raw = parts.join('').replace(/[^a-z0-9]/g, '');
  return raw || 'x';
}

/** 最终文件名：小写首拼 + _ + 图片 ID（唯一、不覆盖短名如 byg.jpg） */
function assignFilenames(items) {
  return items.map((it) => {
    const initials = nameToLowerInitials(it.name);
    return { ...it, initials, filename: `${initials}.jpg` };
  });
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
    const name = firstSeg.split('||')[0].trim();
    if (!items.some((x) => x.id === id)) items.push({ name, id, url });
  }
  return items;
}

async function downloadFile(url, dest) {
  const res = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      Referer: 'https://www.lecake.com/',
      Accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
}

async function main() {
  const arr = [];
  fs.mkdirSync(OUT_DIR, { recursive: true });

  // 清理旧版「单个大写字母 + 数字 ID」命名（如 X28696.jpg）
  for (const f of fs.readdirSync(OUT_DIR)) {
    if (/^[A-Z][0-9]+\.jpg$/.test(f)) {
      fs.unlinkSync(path.join(OUT_DIR, f));
    }
  }

  const res = await fetch(LIST_URL, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    },
  });
  if (!res.ok) throw new Error(`列表页 HTTP ${res.status}`);
  const html = await res.text();
  const items = parseItems(html);
  if (items.length === 0) {
    console.error('未解析到商品图片，页面结构可能已变更。');
    process.exit(1);
  }

  console.log(`共 ${items.length} 张列表图，保存到 ${OUT_DIR}\n`);

  const withNames = assignFilenames(items);

  for (const { name, id, url, filename } of withNames) {
    const dest = path.join(OUT_DIR, filename);
    arr.push({ name, img: '/cake' + filename, price: '¥ 258/约415g' });
    process.stdout.write(`${filename}  <-  ${name}\n`);
    try {
      await downloadFile(url, dest);
    } catch (e) {
      console.error(`  失败: ${e.message}`);
    }
  }

  // 若目录里仍有「纯小写首拼、无 _ID」的旧文件，且已有首拼_ID 版本，则删除旧文件（保留 byg.jpg 等自留短名）
  const preserveBare = new Set(['byg']);
  const allFiles = fs.readdirSync(OUT_DIR);
  for (const f of allFiles) {
    if (!f.endsWith('.jpg')) continue;
    const bare = /^([a-z0-9]+)\.jpg$/i.exec(f);
    if (!bare) continue;
    const base = bare[1].toLowerCase();
    if (preserveBare.has(base)) continue;
    const hasIdVariant = allFiles.some((x) =>
      new RegExp(`^${base}_\\d+\\.jpg$`, 'i').test(x),
    );
    if (hasIdVariant) fs.unlinkSync(path.join(OUT_DIR, f));
  }

  console.log('\n完成。', arr);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
