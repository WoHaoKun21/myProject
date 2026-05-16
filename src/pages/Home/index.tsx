import { bannerArr, birthdayItems, wangGridItems } from '@/assets/home';
import { commCode } from '@/constants';
import { ShopArr } from '@/models/shop';
import { connect, history, useDispatch } from '@umijs/max';
import { message } from 'antd';
import React from 'react';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import styles from './index.less';

SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);

const Home: React.FC<ShopArr> = ({ shopList, user }) => {
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
      <div className={styles.banner}>
        <Swiper
          autoplay={{ delay: 5000 }}
          initialSlide={0}
          slidesPerView={'auto'}
          navigation={true}
          loop={true}
          noSwiping // 滑动到最后，左右箭头无法使用
        >
          {bannerArr.map((o, i) => (
            <SwiperSlide style={{ width: '100%', height: '100%' }} key={o.id}>
              <div
                className={styles.item}
                onClick={() => history.push('/cakeInfo', o)}
              >
                <div className={styles.text}>
                  <p>{o.name}</p>
                  <span />
                  <p>{o.remark ?? '-'}</p>
                </div>
                <img src={`/home/banner${i + 1}.jpg`} alt="" />
              </div>
            </SwiperSlide>
          ))}
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
          <img
            src="/home/byg.jpg"
            alt=""
            onClick={() =>
              history.push('/cakeInfo', {
                name: '白月光',
                img: '/cake/byg.jpg',
                price: '¥288',
                weight: '468g',
                taste: 4,
                norms: 1,
              })
            }
          />
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
                  price: '¥288',
                  weight: '468g',
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
          <img
            src="/home/msyf.jpg"
            alt=""
            onClick={() =>
              history.push('/cakeInfo', {
                name: '穆萨耶夫·闪耀',
                img: '/cake/msyfsy.jpg',
                price: '¥288',
                weight: '490g',
                taste: 4,
                norms: 2,
              })
            }
          />
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
                  price: '¥288',
                  weight: '490g',
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
          <img
            src="/home/jhyc.jpg"
            alt=""
            onClick={() =>
              history.push('/cakeInfo', {
                name: '金葫耀财',
                img: '/cake/jhyc.jpg',
                price: '¥288',
                weight: '460g',
                taste: 4,
                norms: 1,
              })
            }
          />
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
                  price: '¥288',
                  weight: '460g',
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
          <img
            src="/home/hysj.jpg"
            alt=""
            onClick={() =>
              history.push('/cakeInfo', {
                name: '环游世界',
                img: '/cake/hysj.jpg',
                price: '¥258',
                weight: '454g',
                taste: 3,
                norms: 2,
              })
            }
          />
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
                  price: '¥258',
                  weight: '454g',
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
            <img
              src="/home/byg.jpg"
              alt=""
              onClick={() =>
                history.push('/cakeInfo', {
                  name: '雪域牛乳芝士',
                  img: '/cake/xynrzs.jpg',
                  price: '¥218',
                  weight: '454g',
                  taste: 1,
                  norms: 2,
                })
              }
            />
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
                <img
                  src={o.img}
                  alt={o.name}
                  onClick={() => history.push('/cakeInfo', o)}
                />
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
            <img
              src="/home/birthday.jpg"
              alt=""
              onClick={() =>
                history.push('/cakeInfo', {
                  name: '巧遇莓好',
                  img: '/cake/qymh.jpg',
                  price: '¥258',
                  weight: '580g',
                  taste: 4,
                  norms: 1,
                })
              }
            />
          </div>
          <div className={styles.wangFeaturedInfo}>
            <span />
            <span className={styles.wangFeaturedMeta}>¥ 128/约454g</span>
          </div>
        </div>
        <div className={styles.wangGrid}>
          {birthdayItems.map((o) => (
            <div key={o.name} className={styles.wangCard}>
              <img
                src={o.img}
                alt={o.name}
                onClick={() => history.push('/cakeInfo', o)}
              />
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

const stateToProps = ({ shop }: any) => ({ ...shop });

export default connect(stateToProps)(Home);
