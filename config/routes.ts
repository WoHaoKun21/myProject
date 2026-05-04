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
  { path: '/', redirect: '/leaflet' },
  {
    path: '/leaflet',
    name: 'Leflets的使用',
    routes: [
      { path: '/leaflet', redirect: '/leaflet/tdMap' },
      {
        path: '/leaflet/tdMap',
        name: 'Leflets加载天地图',
        component: './leafletTD',
      },
    ],
  },
];
export default routes;
