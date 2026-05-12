import { cakeList } from '@/assets/cake';
import { ShoppingType } from '@/components/Icon';
import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './index.less';

const Cake: React.FC = () => {
  const [select, setSelect] = useState<{
    taste: string | number;
    norms: string | number;
  }>({
    taste: '',
    norms: '',
  });

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
        {cakeList
          .filter((o) => {
            if (taste && o.taste !== taste) return false;
            if (norms && o.norms !== norms) return false;
            return true;
          })
          .map((o) => (
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
          ))}
      </div>
    </div>
  );
};

export default Cake;
