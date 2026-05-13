import { commCode } from '@/constants';
import { connect, history, useDispatch } from '@umijs/max';
import { message } from 'antd';
import React from 'react';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import styles from './index.less';

SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);

const wangGridItems = [
  { name: '雪域牛乳芝士', price: '¥ 218/约454g', img: '/home/mgqt.jpg' },
  { name: '锦鲤送福', price: '¥ 218/约454g', img: '/home/jlsf.jpg' },
  { name: '雪域芝士', price: '¥ 198/约420g', img: '/home/qqmy.jpg' },
  { name: '雪域慕斯', price: '¥ 228/约440g', img: '/home/xsmj.jpg' },
];
const birthdayItems = [
  { name: '四拼悠乐', price: '¥ 218/约454g', img: '/home/spyl.jpg' },
  { name: '巧遇莓好', price: '¥ 218/约480g', img: '/home/qymh.jpg' },
  { name: '梦幻星云', price: '¥ 218/约460g', img: '/home/mhxy.jpg' },
  { name: '青绮「猕」漾', price: '¥ 218/约472g', img: '/home/qqmy.jpg' },
  { name: '蜜瓜轻甜', price: '¥ 218/约448g', img: '/home/mgqt.jpg' },
  { name: '芋你啵啵', price: '¥ 218/约515g', img: '/home/ynbb.jpg' },
];

const Home: React.FC = ({ shopList }: any) => {
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
      <div className={styles.banner}>
        <Swiper
          autoplay={{ delay: 5000 }}
          initialSlide={0}
          slidesPerView={'auto'}
          navigation={true}
          loop={true}
          noSwiping // 滑动到最后，左右箭头无法使用
        >
          <SwiperSlide style={{ width: '100%', height: '100%' }}>
            <div
              className={styles.item}
              onClick={() => {
                history.push('/cakeInfo', { name: '白月光' });
              }}
            >
              <div className={styles.text}>
                <p>520挚爱</p>
                <span />
                <p>双层蛋糕，与你与她共享共享爱意</p>
              </div>
              <img src="/home/banner1.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ width: '100%', height: '100%' }}>
            <div
              className={styles.item}
              onClick={() => {
                history.push('/cakeInfo');
              }}
            >
              <div className={styles.text}>
                <p>520臻爱蛋糕</p>
                <span />
                <p>让爱，一层叠一层</p>
              </div>
              <img src="/home/banner2.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ width: '100%', height: '100%' }}>
            <div
              className={styles.item}
              onClick={() => {
                history.push('/cakeInfo');
              }}
            >
              <div className={styles.text}>
                <p>甜蜜花礼</p>
                <span />
                <p>盛放如初，至臻浪漫</p>
              </div>
              <img src="/home/banner3.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ width: '100%', height: '100%' }}>
            <div
              className={styles.item}
              onClick={() => {
                history.push('/cakeInfo');
              }}
            >
              <div className={styles.text}>
                <p>金砖纳彩</p>
                <span />
                <p>招财进宝，财源广进</p>
              </div>
              <img src="/home/banner4.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ width: '100%', height: '100%' }}>
            <div
              className={styles.item}
              onClick={() => {
                history.push('/cakeInfo');
              }}
            >
              <div className={styles.text}>
                <p>牛乳芝士</p>
                <span />
                <p>愿你的心中留下一抹香甜</p>
              </div>
              <img src="/home/banner5.jpg" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.select}>
        <img src="/home/img1.jpg" alt="" />
        <img src="/home/img2.jpg" alt="" />
        <img src="/home/img3.jpg" alt="" />
      </div>
      <div className={styles.preferred}>
        <div className={styles.preferredCard}>
          <div className={styles.preferredSectionHead}>
            <span className={styles.preferredSectionLine} />
            <span className={styles.preferredSectionLabel}>当季优享</span>
            <span className={styles.preferredSectionLine} />
          </div>
          <img src="/home/byg.jpg" alt="" />
          <div className={styles.preferredInfo}>
            <h3 className={styles.preferredName}>白月光</h3>
            <p className={styles.preferredDesc}>520爱意加倍</p>
            <p className={styles.preferredDesc}>两层心意，一次说尽</p>
            <p className={styles.preferredPrice}>¥ 288 / 约 468g</p>
            <button
              type="button"
              className={styles.preferredBtn}
              onClick={() =>
                addLove({
                  name: '白月光',
                  img: '/cake/byg.jpg',
                  price: '¥288/约468g',
                  taste: 4,
                  norms: 1,
                })
              }
            >
              {shopList.map((o: any) => o.name).includes('白月光')
                ? '已加入喜欢'
                : '加入喜欢'}
            </button>
          </div>
        </div>
        <div className={styles.preferredCard}>
          <img src="/home/msyf.jpg" alt="" />
          <div className={styles.preferredInfo}>
            <h3 className={styles.preferredName}>穆萨耶夫·闪耀</h3>
            <p className={styles.preferredDesc}>焕「心」升级</p>
            <p className={styles.preferredDesc}>心意在此闪耀</p>
            <p className={styles.preferredPrice}>¥ 288/约490g</p>
            <button
              type="button"
              className={styles.preferredBtn}
              onClick={() =>
                addLove({
                  name: '穆萨耶夫·闪耀',
                  img: '/cake/msyfsy.jpg',
                  price: '¥288/约490g',
                  taste: 4,
                  norms: 2,
                })
              }
            >
              {shopList.map((o: any) => o.name).includes('穆萨耶夫·闪耀')
                ? '已加入喜欢'
                : '加入喜欢'}
            </button>
          </div>
        </div>
        <div className={styles.preferredCard}>
          <img src="/home/jhyc.jpg" alt="" />
          <div className={styles.preferredInfo}>
            <h3 className={styles.preferredName}>金葫耀财</h3>
            <p className={styles.preferredDesc}>新中式福禄纳吉</p>
            <p className={styles.preferredDesc}>福运好运全全收</p>
            <p className={styles.preferredPrice}>¥ 288/约460g</p>
            <button
              type="button"
              className={styles.preferredBtn}
              onClick={() =>
                addLove({
                  name: '金葫耀财',
                  img: '/cake/jhyc.jpg',
                  price: '¥288/约460g',
                  taste: 4,
                  norms: 1,
                })
              }
            >
              {shopList.map((o: any) => o.name).includes('金葫耀财')
                ? '已加入喜欢'
                : '加入喜欢'}
            </button>
          </div>
        </div>
        <div className={styles.preferredCard}>
          <img src="/home/hysj.jpg" alt="" />
          <div className={styles.preferredInfo}>
            <h3 className={styles.preferredName}>环游世界</h3>
            <p className={styles.preferredDesc}>一次拥有9种缤纷口味</p>
            <p className={styles.preferredDesc}>甜蜜多拼 爱意环游</p>
            <p className={styles.preferredPrice}>¥ 258/约454g</p>
            <button
              type="button"
              className={styles.preferredBtn}
              onClick={() =>
                addLove({
                  name: '环游世界',
                  img: '/cake/hysj.jpg',
                  price: '¥258/约454g',
                  taste: 3,
                  norms: 2,
                })
              }
            >
              {shopList.map((o: any) => o.name).includes('环游世界')
                ? '已加入喜欢'
                : '加入喜欢'}
            </button>
          </div>
        </div>
      </div>
      <div className={styles.wang}>
        <div className={styles.wangHeader}>
          <span className={styles.wangHeaderLine} />
          <span className={styles.wangHeaderTitle}>王牌雪域系列</span>
          <span className={styles.wangHeaderLine} />
        </div>
        <div className={styles.wangFeatured}>
          <div className={styles.wangFeaturedImgWrap}>
            <img src="/home/byg.jpg" alt="" />
          </div>
          <div className={styles.wangFeaturedInfo}>
            <span className={styles.wangFeaturedName}>雪域牛乳芝士</span>
            <span className={styles.wangFeaturedMeta}>¥ 218/约454g</span>
          </div>
        </div>
        <div className={styles.wangGrid}>
          {wangGridItems.map((o) => (
            <div key={o.name} className={styles.wangCard}>
              <div className={styles.wangCardImage}>
                <img src={o.img} alt={o.name} />
              </div>
              <div className={styles.wangCardInfo}>
                <p className={styles.wangCardName}>{o.name}</p>
                <p className={styles.wangCardPrice}>{o.price}</p>
                <button
                  type="button"
                  className={styles.wangCardBtn}
                  onClick={() => addLove(o)}
                >
                  {shopList.map((o: any) => o.name).includes(o.name)
                    ? '已加入喜欢'
                    : '加入喜欢'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.birthday}>
        <div className={styles.wangHeader}>
          <span className={styles.wangHeaderLine} />
          <span className={styles.wangHeaderTitle}>生日心享</span>
          <span className={styles.wangHeaderLine} />
        </div>
        <div className={styles.wangFeatured}>
          <div className={styles.wangFeaturedImgWrap}>
            <img src="/home/birthday.jpg" alt="" />
          </div>
          <div className={styles.wangFeaturedInfo}>
            <span />
            <span className={styles.wangFeaturedMeta}>¥ 128/约454g</span>
          </div>
        </div>
        <div className={styles.wangGrid}>
          {birthdayItems.map((o) => (
            <div key={o.name} className={styles.wangCard}>
              <img src={o.img} alt={o.name} />
              <div className={styles.wangCardInfo}>
                <p className={styles.wangCardName}>{o.name}</p>
                <p className={styles.wangCardPrice}>{o.price}</p>
                <button
                  type="button"
                  className={styles.wangCardBtn}
                  onClick={() => addLove(o)}
                >
                  {shopList.map((o: any) => o.name).includes(o.name)
                    ? '已加入喜欢'
                    : '加入喜欢'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const stateToProps = ({ shop }: any) => {
  return { ...shop };
};

export default connect(stateToProps)(Home);
