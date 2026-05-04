import { defineConfig } from '@umijs/max';
import routes from './routes';

// @umi/max（umi@4）最新版：之前的一些插件约定开启的规则，在这个版本中几乎都要通过显式的配置开启
export default defineConfig({
  // 已有 routes 里 path: '/' 的 component: '@/layouts'；若再启用约定式 layouts/index，会套两层同一布局导致重复渲染
  // conventionLayout: false,// 当启用自定义layout的时候，页面会嵌套两层，conventionLayout设置为false后就不会嵌套了，或者把routes的@/layouts注释掉也行
  antd: {}, //
  access: {}, // 启用静态资源
  model: {}, // 我的理解是：自定义hooks模块，可通过react提供的useModel来进行获取
  initialState: {}, // 初始initialState，相当于全局使用的数据，app.ts下的方法可进行处理
  request: {}, // 开启异步请求，对应的 app.ts下的request可以对请求进行处理
  // layout: {}, // @umi/max的内置布局，app.ts下的layout优先级最高
  // 开启dva
  // dva: { immer: {} },
  historyWithQuery: {}, // 新版通过“history.location.query”会报错，开启后就能正常使用了
  hash: true, //build的时候对文件名字进行hash处理
  fastRefresh: true, // 热更新，更新初始initialState的数据，app.ts下的
  // head标签内的script：umi4版本不支持document.ejs，使用“headScripts”可在全局引入script标签
  headScripts: [
    { src: `/leaflet/leaflet.js` /* defer: true */ }, // defer用来让script标签在页面渲染完毕后执行，效果类似于“scripts”的配置
    { src: `/leaflet/leaflet-src.js` },
    { src: `/leaflet/proj4.js` },
    { src: `/leaflet/proj4leaflet.js` },
    { src: `/sdk.js` },
  ],
  // 在"root"挂载点后面添加script标签
  scripts: [`var a`],
  // 配置额外的link标签
  links: [{ href: '/leaflet/leaflet.css', rel: 'stylesheet' }],
  routes,
  // 代理
  proxy: {
    '/api': {
      target: 'http://47.97.9.139:8080/Apidemo',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  npmClient: 'npm',
});
