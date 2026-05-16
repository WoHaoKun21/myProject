export interface Routes {
  path?: string;
  name?: string;
  redirect?: string;
  icon?: any;
  component?: string;
  routes?: Routes[];
  layout?: boolean;
  exact?: boolean;
  hideInMenu?: true; // 隐藏表单
  access?: string; // 权限定义返回值的某个 key
}

const routes: Routes[] = [
  /*  
  
    注释：在umi4版本中，约定式布局默认启用，若在已有 routes 里 path: '/' 的 component: '@/layouts'；
    再启用约定式 layouts/index，会套两层同一布局导致重复渲染
  
  */
  // {
  //   path: '/',
  //   component: '@/layouts',
  //   routes: [
  //   ],
  // },

  { path: '/', redirect: '/home', hideInMenu: true },
  {
    path: '/home',
    name: '首页',
    component: './Home',
  },
  {
    path: '/cake',
    name: '甜点甄选',
    component: './Cake',
  },
  {
    path: '/dessert',
    name: '甜品优选',
    component: './Dessert',
  },
  {
    path: '/convert',
    name: '甜点专区',
    component: './Convert',
  },
  {
    path: '/cakeInfo',
    name: '甜点详情',
    component: './CakeInfo',
    hideInMenu: true,
  },
  {
    path: '/loveList',
    name: '喜欢列表',
    component: './LoveList',
    hideInMenu: true,
  },
  {
    path: '/login',
    name: '游客登陆',
    component: './Login',
    hideInMenu: true,
    layout: false,
  },
  { component: './404', hideInMenu: true },
];
export default routes;
