import { FillLoveType, LoveType } from '@/components/Icon';
import { commCode, remove } from '@/constants';
import { ShopArr } from '@/models/shop';
import { connect, history, useDispatch, useLocation } from '@umijs/max';
import { message } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './index.less';

const Cake: React.FC<ShopArr> = ({ shopList, cakeLists }) => {
  const dispatch = useDispatch();
  const { state }: { pathname: string; state: any } = useLocation(); // 获取当前路径
  const [select, setSelect] = useState<{
    taste: string | number;
    norms: string | number;
  }>({
    taste: '',
    norms: '',
  });

  const addLove = (shop: any) => {
    const newList = commCode(shop, shopList, dispatch);
    if (newList.length !== 0) {
      dispatch({ type: 'shop/add', payload: newList });
    } else {
      message.warning('请勿重复添加！');
    }
  };

  const { taste, norms } = select;

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div>
          <span>口味：</span>
          <ul>
            <li
              className={classNames([taste === '' && styles.active])}
              onClick={() => setSelect((d) => ({ ...d, taste: '' }))}
            >
              全部
            </li>
            <li
              className={classNames([taste === 1 && styles.active])}
              onClick={() => setSelect((d) => ({ ...d, taste: 1 }))}
            >
              雪域口味
            </li>
            <li
              className={classNames([taste === 2 && styles.active])}
              onClick={() => setSelect((d) => ({ ...d, taste: 2 }))}
            >
              芝士口味
            </li>
            <li
              className={classNames([taste === 3 && styles.active])}
              onClick={() => setSelect((d) => ({ ...d, taste: 3 }))}
            >
              巧克力味
            </li>
            <li
              className={classNames([taste === 4 && styles.active])}
              onClick={() => setSelect((d) => ({ ...d, taste: 4 }))}
            >
              慕斯口味
            </li>
            <li
              className={classNames([taste === 5 && styles.active])}
              onClick={() => setSelect((d) => ({ ...d, taste: 5 }))}
            >
              鲜果口味
            </li>
            <li
              className={classNames([taste === 6 && styles.active])}
              onClick={() => setSelect((d) => ({ ...d, taste: 6 }))}
            >
              奶油口味
            </li>
          </ul>
        </div>
        <div>
          <span>口味：</span>
          <ul>
            <li
              className={classNames([norms === '' && styles.active])}
              onClick={() => setSelect((d) => ({ ...d, norms: '' }))}
            >
              全部
            </li>
            <li
              className={classNames([norms === 1 && styles.active])}
              onClick={() => setSelect((d) => ({ ...d, norms: 1 }))}
            >
              1-2人食
            </li>
            <li
              className={classNames([norms === 2 && styles.active])}
              onClick={() => setSelect((d) => ({ ...d, norms: 2 }))}
            >
              2-4人食
            </li>
            <li
              className={classNames([norms === 3 && styles.active])}
              onClick={() => setSelect((d) => ({ ...d, norms: 3 }))}
            >
              5-8人食
            </li>
            <li
              className={classNames([norms === 4 && styles.active])}
              onClick={() => setSelect((d) => ({ ...d, norms: 4 }))}
            >
              15-20人食
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.list}>
        {cakeLists
          .filter((o) => {
            if (taste && o.taste !== taste) return false;
            if (norms && o.norms !== norms) return false;
            return true;
          })
          .filter((o) => (state?.value ? o.name.includes(state.value) : true))
          .map((o) => (
            <div className={styles.item} key={o.name}>
              <img
                src={o.img ?? '/cake/byg.jpg'}
                alt=""
                onClick={() => history.push('/cakeInfo', o)}
              />
              <div className={styles.info}>
                <p className={styles.name}>{o.name ?? '-'}</p>
                <p className={styles.price}>
                  {o.price ?? '-'}/约{o.weight ?? '-'}
                </p>
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
          ))}
      </div>
    </div>
  );
};

const stateToProps = ({ shop }: any) => {
  return { ...shop };
};

export default connect(stateToProps)(Cake);
