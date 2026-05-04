import {
  CoordinateType,
  OnlineType,
  PersonType,
  SearchType,
  ShoppingType,
} from '@/components/Icon';
import { Outlet } from '@umijs/max';
import CommMenu from './CommMenu';
import styles from './index.less';

const Layout = () => {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.left}>
          <div>
            <CoordinateType style={{ fontSize: 22 }} />
            上海
          </div>
          <span>甜点DESSERT</span>
        </div>
        <CommMenu />
        <div className={styles.right}>
          <SearchType style={{ fontSize: 22 }} />
          <ShoppingType style={{ fontSize: 22, margin: '0px 30px' }} />
          <PersonType style={{ fontSize: 22 }} />
        </div>
      </header>
      <section>
        <Outlet />
      </section>
      <footer>
        <div></div>
        <div></div>
      </footer>
      <div className={styles.online}>
        <OnlineType style={{ fontSize: 30, marginBottom: 5 }} />
        <span>在线客服</span>
      </div>
    </div>
  );
};

export default Layout;
