import React, { useEffect } from 'react';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import styles from './index.less';

SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);

const Home: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Swiper
          initialSlide={0}
          slidesPerView={'auto'}
          navigation={true}
          loop={true}
          noSwiping // 滑动到最后，左右箭头无法使用
        >
          <SwiperSlide style={{ width: '100%', height: '100%' }}>
            <div className={styles.item}>
              <div className={styles.text}>
                <p>520挚爱</p>
                ——
                <p>双层蛋糕，与你与她共享共享爱意</p>
              </div>
              <img src="/home/banner1.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ width: '100%', height: '100%' }}>
            <div className={styles.item}>
              <div className={styles.text}>
                <p>520挚爱</p>
                ——
                <p>双层蛋糕，与你与她共享共享爱意</p>
              </div>
              <img src="/home/banner2.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ width: '100%', height: '100%' }}>
            <div className={styles.item}>
              <div className={styles.text}>
                <p>520挚爱</p>
                ——
                <p>双层蛋糕，与你与她共享共享爱意</p>
              </div>
              <img src="/home/banner3.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ width: '100%', height: '100%' }}>
            <div className={styles.item}>
              <div className={styles.text}>
                <p>520挚爱</p>
                ——
                <p>双层蛋糕，与你与她共享共享爱意</p>
              </div>
              <img src="/home/banner4.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ width: '100%', height: '100%' }}>
            <div className={styles.item}>
              <div className={styles.text}>
                <p>520挚爱</p>
                ——
                <p>双层蛋糕，与你与她共享共享爱意</p>
              </div>
              <img src="/home/banner5.jpg" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.select}>精选甜点</div>
      <div className={styles.preferred}>当季优选</div>
      <div className={styles.wang}>王牌雪域系列</div>
      <div className={styles.birthday}>生日心享</div>
    </div>
  );
};

export default Home;
