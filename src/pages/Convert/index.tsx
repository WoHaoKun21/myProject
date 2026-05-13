import {
  convert1,
  convert2,
  convert3,
  convert4,
  convert5,
} from '@/assets/convert';
import { FillLoveType, LoveType } from '@/components/Icon';
import { commCode, remove } from '@/constants';
import { RightOutlined } from '@ant-design/icons/lib/icons';
import { connect, useDispatch } from '@umijs/max';
import { Tabs, message } from 'antd';
import React, { useState } from 'react';
import styles from './index.less';

const Convert: React.FC = ({ shopList }: any) => {
  const dispatch = useDispatch();
  const [selectKey, setSelectKey] = useState<string>('1');

  const addLove = (shop: any) => {
    const newList = commCode(shop, shopList, dispatch);
    if (newList.length !== 0) {
      dispatch({ type: 'shop/add', payload: newList });
    } else {
      message.warning('请勿重复添加！');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Tabs activeKey={selectKey} onChange={(key) => setSelectKey(key)}>
          <Tabs.TabPane tab="蛋糕专区" key="1" />
          <Tabs.TabPane tab="组合专区" key="2" />
          <Tabs.TabPane tab="小食专区" key="3" />
          <Tabs.TabPane tab="心选蛋糕系列" key="4" />
          <Tabs.TabPane tab="优选专区" key="5" />
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
                    立即查看
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
                    立即查看
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
                    {shopList.map((o: any) => o.name).includes(o.name) ? (
                      <FillLoveType
                        onClick={() => remove(o, dispatch, shopList)}
                        style={{
                          fontSize: 22,
                          color: '#d6bb70',
                          margin: '0px 10px',
                        }}
                      />
                    ) : (
                      <LoveType
                        onClick={() => addLove(o)}
                        style={{
                          fontSize: 22,
                          color: '#d6bb70',
                          margin: '0px 10px',
                        }}
                      />
                    )}
                    <span
                      onClick={() => addLove(o)}
                      style={{ color: '#000', borderBottom: '1px solid #333' }}
                    >
                      {shopList.map((o: any) => o.name).includes(o.name)
                        ? '已加入喜欢'
                        : '加入喜欢'}
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
                    立即查看
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
                    立即查看
                    <RightOutlined style={{ fontSize: 10 }} />
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

const stateToProps = ({ shop }: any) => {
  return { ...shop };
};

export default connect(stateToProps)(Convert);
