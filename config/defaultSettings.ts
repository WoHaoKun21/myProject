import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light', // 主题颜色，dark为暗黑（默认），light为亮色
  layout: 'top', // 侧边栏布局，side为侧边栏（默认），top为顶部栏
  contentWidth: 'Fluid', // 可选值：Fluid(流式)，Fixed(固定)
  fixedHeader: false,
  fixSiderbar: true,
  footerRender: false,
  colorWeak: false,
  menu: {
    locale: false,
  },
  title: '水文多要素自动监测数据管理平台',
  pwa: false,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: '',
};

export default Settings;
