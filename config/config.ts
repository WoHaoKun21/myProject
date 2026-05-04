import { defineConfig } from '@umijs/max';
import routes from './routes';

// @umi/max（umi@4）最新版：之前的一些插件约定开启的规则，在这个版本中几乎都要通过显式的配置开启
export default defineConfig({
  antd: {}, //
  access: {}, // 启用静态资源
  model: {}, // 我的理解是：自定义hooks模块，可通过react提供的useModel来进行获取
  initialState: {}, // 初始initialState，相当于全局使用的数据，app.ts下的方法可进行处理
  request: {}, // 开启异步请求，对应的 app.ts下的request可以对请求进行处理
  layout: {}, // @umi/max的内置布局，app.ts下的layout优先级最高
  // 开启dva
  dva: {
    immer: {},
  },
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
    {
      content:
        "window._AMapSecurityConfig = {securityJsCode:'16f81296c450f8bb5149a86056dae9c8'}",
    },
  ],
  // 在"root"挂载点后面添加script标签
  scripts: [
    `var a`,
    'https://webapi.amap.com/maps?v=1.4.15&key=514c99148afec38a187b745ddbd1e517&plugin=AMap.Autocomplete,AMap.PlaceSearch,plugin=Map3D,AMap.DistrictSearch,AMap.PolyEditor',
    'https://cache.amap.com/lbs/static/addToolbar.js',
  ],
  // 配置额外的link标签
  links: [
    { href: '/leaflet/leaflet.css', rel: 'stylesheet' },
    {
      href: 'https://cache.amap.com/lbs/static/main1119.css',
      rel: 'stylesheet',
    },
    {
      src: 'https://a.amap.com/jsapi_demos/static/demo-center/css/demo-center.css',
      rel: 'stylesheet',
    },
  ],
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
