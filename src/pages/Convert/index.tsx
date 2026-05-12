import {
  convert1,
  convert2,
  convert3,
  convert4,
  convert5,
} from '@/assets/convert';
import { ShoppingType } from '@/components/Icon';
import { RightOutlined } from '@ant-design/icons/lib/icons';
import { Tabs } from 'antd';
import React, { useState } from 'react';
import styles from './index.less';

const Convert: React.FC = () => {
  const [selectKey, setSelectKey] = useState<string>('1');

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Tabs activeKey={selectKey} onChange={(key) => setSelectKey(key)}>
          <Tabs.TabPane tab="蛋糕券兑换专区" key="1" />
          <Tabs.TabPane tab="组合券兑换专区" key="2" />
          <Tabs.TabPane tab="小食兑换专区" key="3" />
          <Tabs.TabPane tab="心选蛋糕系列" key="4" />
          <Tabs.TabPane tab="福利优选n+专区" key="5" />
        </Tabs>
      </div>
      <div className={styles.list}>
        {selectKey === '1'
          ? convert1.map((o) => (
              <div className={styles.item} key={o.name}>
                <img src={o.img ?? '/cake/byg.jpg'} alt="" />
                <div className={styles.info}>
                  <p className={styles.name}>{o.name ?? '-'}</p>
                  <p className={styles.price}>{o.price ?? '-'}</p>
                  <div className={styles.btn}>
                    立即兑换
                    <RightOutlined style={{ fontSize: 10 }} />
                  </div>
                </div>
              </div>
            ))
          : selectKey === '2'
          ? convert2.map((o) => (
              <div className={styles.item} key={o.name}>
                <img src={o.img ?? '/cake/byg.jpg'} alt="" />
                <div className={styles.info}>
                  <p className={styles.name}>{o.name ?? '-'}</p>
                  <p className={styles.price}>{o.price ?? '-'}</p>
                  <div className={styles.btn}>
                    立即兑换
                    <RightOutlined style={{ fontSize: 10 }} />
                  </div>
                </div>
              </div>
            ))
          : selectKey === '3'
          ? convert3.map((o) => (
              <div className={styles.item} key={o.name}>
                <img src={o.img ?? '/cake/byg.jpg'} alt="" />
                <div className={styles.info}>
                  <p className={styles.name}>{o.name ?? '-'}</p>
                  <p className={styles.price}>{o.price ?? '-'}</p>
                  <div className={styles.btn}>
                    <ShoppingType
                      style={{
                        fontSize: 22,
                        color: '#d6bb70',
                        margin: '0px 10px',
                      }}
                    />
                    <span
                      style={{ color: '#000', borderBottom: '1px solid #333' }}
                    >
                      加入购物车
                    </span>
                  </div>
                </div>
              </div>
            ))
          : selectKey === '4'
          ? convert4.map((o) => (
              <div className={styles.item} key={o.name}>
                <img src={o.img ?? '/cake/byg.jpg'} alt="" />
                <div className={styles.info}>
                  <p className={styles.name}>{o.name ?? '-'}</p>
                  <p className={styles.price}>{o.price ?? '-'}</p>
                  <div className={styles.btn}>
                    立即兑换
                    <RightOutlined style={{ fontSize: 10 }} />
                  </div>
                </div>
              </div>
            ))
          : selectKey === '5' &&
            convert5.map((o) => (
              <div className={styles.item} key={o.name}>
                <img src={o.img ?? '/cake/byg.jpg'} alt="" />
                <div className={styles.info}>
                  <p className={styles.name}>{o.name ?? '-'}</p>
                  <p className={styles.price}>{o.price ?? '-'}</p>
                  <div className={styles.btn}>
                    立即兑换
                    <RightOutlined style={{ fontSize: 10 }} />
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Convert;
