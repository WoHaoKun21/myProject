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
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'model的使用',
    component: './Home',
  },
  {
    path: '/leaflet',
    name: 'Leflets的使用',
    routes: [
      {
        path: '/leaflet/tdMap',
        name: 'Leflets加载天地图',
        component: './leafletTD',
      },
      // {
      //   path: '/leaflet/bdMap',
      //   name: 'Leflets加载百度地图',
      //   component: './leafletBD',
      // },
      // {
      //   path: '/leaflet/gdMap',
      //   name: 'Leflets加载高德地图',
      //   component: './leafletGD',
      // },
      // {
      //   path: '/leaflet/bdSwitch',
      //   name: 'Leflets百度地图图层切换',
      //   component: './leafletBDSwitch',
      // },
    ],
  },
  {
    path: '/orillusion',
    name: 'Orillusion模型',
    component: './OrillusionModel',
  },
];
export default routes;
