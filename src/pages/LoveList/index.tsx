import { connect } from '@umijs/max';
import React from 'react';
import styles from './index.less';

const LoveList: React.FC = ({ shopList }: any) => {
  // 状态：统计数据预览（可从原HTML逻辑中迁移）
  const stats = [
    { label: '设备总数', value: '1,284', icon: '📦', color: '#1890ff' },
    { label: '运行中', value: '1,156', icon: '⚙️', color: '#52c41a' },
    { label: '故障待修', value: '12', icon: '⚠️', color: '#f5222d' },
    // ...以此类推
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.tableBox}>
        <div className={styles.tableHeader}>设备台账列表</div>
        <table>
          <thead>
            <tr>
              <th>设备编号</th>
              <th>设备名称</th>
              <th>型号规格</th>
              <th>安装位置</th>
              <th>当前状态</th>
            </tr>
          </thead>
          <tbody>
            {/* 这里可以通过 map 渲染列表数据 */}
            <tr>
              <td>SB-2023-001</td>
              <td>1# 取水泵组</td>
              <td>KWP 300-400</td>
              <td>1# 取水机房</td>
              <td>
                <span style={{ color: '#52c41a' }}>● 运行中</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const stateToProps = ({ shop }: any) => {
  return { ...shop };
};

export default connect(stateToProps)(LoveList);
