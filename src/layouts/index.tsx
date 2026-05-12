import {
  CoordinateType,
  OnlineType,
  PersonType,
  SearchType,
  ShoppingType,
} from '@/components/Icon';
import { ArrowUpOutlined } from '@ant-design/icons';
import { Outlet } from '@umijs/max';
import { Modal } from 'antd';
import { useEffect, useState } from 'react';
import CommMenu from './CommMenu';
import styles from './index.less';

const Layout = () => {
  const [showTop, setShowTop] = useState(false);
  const [modalObj, setModalObj] = useState<{ open: boolean; title: string }>({
    open: false,
    title: '',
  });

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 1200) setShowTop(true);
      else setShowTop(false);
    };
  }, []);

  const { open, title } = modalObj;

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.left}>
          <div onClick={() => setModalObj((d) => ({ ...d, open: true }))}>
            <CoordinateType style={{ fontSize: 22 }} />
            {title}
          </div>
          <span>甜点DESSERT</span>
        </div>
        <CommMenu />
        <div>
          <SearchType style={{ fontSize: 22 }} />
          <ShoppingType style={{ fontSize: 22, margin: '0px 30px' }} />
          <PersonType style={{ fontSize: 22 }} />
        </div>
      </header>
      <section>
        <Outlet />
      </section>
      <footer>
        <ul className={styles.info}>
          <li>甜点公告</li>
          <li>关于甜点</li>
          <li>客户服务</li>
          <li>经营许可证</li>
          <li>生产许可证</li>
          <li>付费协议</li>
          <li>联系我们</li>
        </ul>
        <div className={styles.info}>
          如有问题，请联系我们的客服人员。工作时间：周一至周日 9:00-21:00
        </div>
        <div className={styles.info}>
          copyright©2010-2026
          诺心lecake.com版权所有&nbsp;&nbsp;诺心食品（上海）有限公司&nbsp;&nbsp;
          沪ICP备10211730号-2 &nbsp;&nbsp; 沪公网安备31010402003364号
        </div>
      </footer>

      <div className={styles.online}>
        <div className={styles.customer}>
          <OnlineType style={{ fontSize: 30, marginBottom: 5 }} />
          <span>在线客服</span>
        </div>
        <div
          className={styles.top}
          style={{ opacity: showTop ? 1 : 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUpOutlined style={{ fontSize: 30, marginBottom: 5 }} />
          <span>返回顶部</span>
        </div>
      </div>
      {open && (
        <Modal
          centered
          open={true}
          title={
            <div>
              当前选择城市：
              <CoordinateType style={{ marginRight: 3 }} />
              杭州
            </div>
          }
          footer={null}
          onCancel={() => setModalObj((d) => ({ ...d, open: false }))}
          getContainer={
            document.getElementsByClassName(styles.container)[0] as HTMLElement
          }
        >
          <p>请选择您所配送的城市：</p>
          <ul className={styles.cityList}>
            <li onClick={() => setModalObj({ open: true, title: '上海' })}>
              上海
            </li>
            <li onClick={() => setModalObj({ open: true, title: '北京' })}>
              北京
            </li>
            <li onClick={() => setModalObj({ open: true, title: '广州' })}>
              广州
            </li>
            <li onClick={() => setModalObj({ open: true, title: '深圳' })}>
              深圳
            </li>
            <li onClick={() => setModalObj({ open: true, title: '杭州' })}>
              杭州
            </li>
            <li onClick={() => setModalObj({ open: true, title: '无锡' })}>
              无锡
            </li>
            <li onClick={() => setModalObj({ open: true, title: '南京' })}>
              南京
            </li>
            <li onClick={() => setModalObj({ open: true, title: '苏州' })}>
              苏州
            </li>
            <li onClick={() => setModalObj({ open: true, title: '南通' })}>
              南通
            </li>
            <li onClick={() => setModalObj({ open: true, title: '石家庄' })}>
              石家庄
            </li>
            <li onClick={() => setModalObj({ open: true, title: '天津' })}>
              天津
            </li>
            <li onClick={() => setModalObj({ open: true, title: '宁波' })}>
              宁波
            </li>
            <li onClick={() => setModalObj({ open: true, title: '成都' })}>
              成都
            </li>
          </ul>
          <p>全国其他城市</p>
        </Modal>
      )}
    </div>
  );
};

export default Layout;
