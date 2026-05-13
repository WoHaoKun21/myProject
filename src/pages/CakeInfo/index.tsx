import { dessertCakesList } from '@/assets/dessert';
import { FillLoveType, LoveType } from '@/components/Icon';
import { commCode, remove } from '@/constants';
import { connect, useDispatch } from '@umijs/max';
import { message } from 'antd';
import React from 'react';
import styles from './index.less';

const CakeInfo: React.FC = ({ shopList }: any) => {
  const dispatch = useDispatch();

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
        <img src="/cake/ynbb.jpg" alt="" />
      </div>
      <div className={styles.list}>
        {dessertCakesList.map((o) => (
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
                <span onClick={() => addLove(o)}>
                  {shopList.map((o: any) => o.name).includes(o.name)
                    ? '已加入喜欢'
                    : '加入喜欢'}
                </span>
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

export default connect(stateToProps)(CakeInfo);
