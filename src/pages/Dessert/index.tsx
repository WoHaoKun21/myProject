import { dessertCakesList } from '@/assets/dessert';
import { ShoppingType } from '@/components/Icon';
import React from 'react';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import styles from './index.less';

SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);

const Dessert: React.FC = () => {
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
            <img src={o.img ?? '/cake/byg.jpg'} alt="" />
            <div className={styles.info}>
              <p className={styles.name}>{o.name ?? '-'}</p>
              <p className={styles.price}>{o.price ?? '-'}</p>
              <div className={styles.btn}>
                <ShoppingType
                  style={{ fontSize: 22, color: '#d6bb70', margin: '0px 10px' }}
                />
                <span>加入购物车</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dessert;
