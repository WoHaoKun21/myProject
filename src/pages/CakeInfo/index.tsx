import { dessertCakesList } from '@/assets/dessert';
import {
  FillLoveType,
  LoveType,
  SweetType,
  VolumeType,
  WeightType,
} from '@/components/Icon';
import { commCode, remove } from '@/constants';
import { ShopArr } from '@/models/shop';
import { connect, history, useDispatch, useLocation } from '@umijs/max';
import { message } from 'antd';
import React, { useEffect } from 'react';
import styles from './index.less';

const CakeInfo: React.FC<ShopArr> = ({ shopList, user }) => {
  const { pathname, state }: { pathname: string; state: any } = useLocation(); // 获取当前路径
  const dispatch = useDispatch();

  const addLove = (shop: any) => {
    if (!user.login) {
      return dispatch({ type: 'shop/addLogin', payload: { open: true } });
    }
    const newList = commCode(shop, shopList, dispatch);
    if (newList.length !== 0) {
      dispatch({ type: 'shop/add', payload: newList });
    } else {
      message.warning('请勿重复添加！');
    }
  };

  useEffect(() => {
    document.getElementById('content')!.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <img src={state?.img ?? '/cake/ynbb.jpg'} alt="" />
      </div>
      <div className={styles.cakeInfo}>
        <div className={styles.infoLeft}>
          <div className={styles.cakeName}>
            <span>{state?.name ?? '-'}</span>
            <span>{state?.price ?? '¥169/约305g'}</span>
          </div>
          <div className={styles.text}>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;献给您的祝福：
              <br />
            </p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {state.msg ?? '-'}
          </div>
        </div>
        <div className={styles.infoRight}>
          <div>建议使用人数</div>
          <div>
            {state.norms === 1
              ? '1-2'
              : state.norms === 2
              ? '2-4'
              : state.norms === 3
              ? '5-8'
              : state.norms === 4 && '15-20'}
            人
          </div>
          <div className={styles.cakeType}>
            <span>
              <VolumeType style={{ marginRight: 6 }} />
              9*9cm
            </span>
            <span>
              <WeightType style={{ marginRight: 6 }} />约{state?.weight ?? '0'}
            </span>
            <span>
              甜度：
              <SweetType />
              <SweetType />
              <SweetType style={{ color: '#cecece' }} />
              <SweetType style={{ color: '#cecece' }} />
              <SweetType style={{ color: '#cecece' }} />
            </span>
          </div>
          <div onClick={() => addLove(history.location.state)}>加入喜欢</div>
        </div>
      </div>

      <div className={styles.list}>
        {dessertCakesList.map((o) => (
          <div className={styles.item} key={o.name}>
            <img
              src={o.img ?? '/cake/byg.jpg'}
              alt=""
              onClick={() => history.push(`/cakeInfo`, o)}
            />
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

const stateToProps = ({ shop }: any) => ({ ...shop });

export default connect(stateToProps)(CakeInfo);
