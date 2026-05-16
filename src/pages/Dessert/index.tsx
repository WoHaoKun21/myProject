import { dessertCakesList } from '@/assets/dessert';
import { FillLoveType, LoveType } from '@/components/Icon';
import { commCode, remove } from '@/constants';
import { ShopArr } from '@/models/shop';
import { connect, history, useDispatch } from '@umijs/max';
import { message } from 'antd';
import React from 'react';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import styles from './index.less';

SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);

const Dessert: React.FC<ShopArr> = ({ shopList, user }) => {
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

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Swiper
          autoplay={{ delay: 5000 }}
          initialSlide={0}
          slidesPerView={'auto'}
          navigation={false}
          loop={true}
          noSwiping // 滑动到最后，左右箭头无法使用
        >
          <SwiperSlide style={{ width: '100%', height: '100%' }}>
            <img src="/dessert/banner1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide style={{ width: '100%', height: '100%' }}>
            <img src="/dessert/banner2.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.list}>
        {dessertCakesList.map((o) => (
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

export default connect(stateToProps)(Dessert);
