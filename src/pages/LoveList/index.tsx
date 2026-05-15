import { FillLoveType } from '@/components/Icon';
import { remove } from '@/constants';
import { connect, useDispatch } from '@umijs/max';
import { Empty } from 'antd';
import React from 'react';
import styles from './index.less';

const LoveList: React.FC = ({ shopList }: any) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      {shopList.length > 0 ? (
        shopList.map((o: any) => (
          <div className={styles.shopItem} key={o.id}>
            <img src={o.img ?? '/cake/ynbb.jpg'} alt="" />
            <div className={styles.shopInfo}>
              <div>
                <span>名称：</span>
                {o.name}
              </div>
              <div>
                <span>价格：</span>
                {o.price}/约{o.weight}
              </div>
              <div>
                <span>口味：</span>
                {o.taste === 1
                  ? '雪域口味'
                  : o.taste === 2
                  ? '芝士口味'
                  : o.taste === 3
                  ? '巧克力味'
                  : o.taste === 4
                  ? '慕斯口味'
                  : o.taste === 5
                  ? '鲜果口味'
                  : o.taste === 6 && '奶油口味'}
              </div>
              <div>
                <span>规格：</span>
                {o.norms === 1
                  ? '1-2'
                  : o.norms === 2
                  ? '2-4'
                  : o.norms === 3
                  ? '5-8'
                  : o.norms === 4 && '15-20'}
                人
              </div>
              <div>
                <span>祝福：</span>
                {o.msg}
              </div>
            </div>
            <div className={styles.shopPrice}>
              <FillLoveType
                onClick={() => remove(o, dispatch, shopList)}
                style={{
                  fontSize: 50,
                  color: '#d6bb70',
                  margin: '0px 10px',
                }}
              />
            </div>
          </div>
        ))
      ) : (
        <Empty description="暂无数据，请添加" />
      )}
    </div>
  );
};

const stateToProps = ({ shop }: any) => ({ ...shop });

export default connect(stateToProps)(LoveList);
