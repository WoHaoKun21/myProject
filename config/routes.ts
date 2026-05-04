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
  {
    path: '/',
    component: '@/layouts',
    routes: [
      { path: '/', redirect: '/home', hideInMenu: true },
      {
        path: '/home',
        name: '首页',
        component: './Home',
      },
      {
        path: '/cake',
        name: '蛋糕甄选',
        component: './404',
      },
      {
        path: '/dessert',
        name: '甜品优选',
        component: './404',
      },
      {
        path: '/petCake',
        name: '宠物蛋糕',
        component: './404',
      },
      {
        path: '/playAlong',
        name: '合作专区',
        routes: [
          { path: '/playAlong', redirect: '/playAlong/bank', hideInMenu: true },
          {
            path: '/playAlong/bank',
            name: '银行活动',
            component: './404',
          },
          {
            path: '/playAlong/business',
            name: '企业采购',
            component: './404',
          },
          {
            path: '/playAlong/zone',
            name: '大客户区',
            component: './404',
          },
        ],
      },
      {
        path: '/convert',
        name: '立即兑换',
        component: './404',
      },
      { component: './404', hideInMenu: true },
    ],
  },
];
export default routes;
