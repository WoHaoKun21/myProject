// import type { RunTimeLayoutConfig } from '@umijs/max';
// import { message } from 'antd';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '数据管理员' };
}

// // ProLayout 支持的api https://procomponents.ant.design/components/layout
// export const layout: RunTimeLayoutConfig = ({ initialState }) => {
//   // 全局提示配置
//   message.config({ duration: 1 }); // 延迟消失时间
//   return {
//     title: '芯牧云实例',
//     logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
//     layout: 'top',
//     menu: { locale: false },
//     contentStyle: { padding: 0, margin: 0, height: 'calc(100vh - 56px)' },
//     disableContentMargin: true,
//     waterMarkProps: { content: '标签' },
//     onPageChange: () => {},
//     // 左头部点击事件
//     onMenuHeaderClick: () => {},
//     // // 头部左侧内容
//     // menuHeaderRender: () => <>456</>,
//     // // 头部导航内容
//     // headerContentRender: () => <>123</>,
//     // // 头部右侧内容
//     // rightContentRender: () => <>123</>,
//     // // 底部内容
//     // footerRender: () => <>789</>,
//     // 增加一个 loading 的状态
//     childrenRender: (children) => children,
//     ...initialState?.settings,
//   };
// };
