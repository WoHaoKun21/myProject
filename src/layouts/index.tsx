import {
  CoordinateType,
  LoveType,
  PersonType,
  SearchType,
} from '@/components/Icon';
import { ArrowUpOutlined } from '@ant-design/icons';
import { connect, Outlet, useLocation } from '@umijs/max';
import { ConfigProvider, Dropdown, Modal, Space } from 'antd';
import { useState } from 'react';
import CommMenu from './CommMenu';
import styles from './index.less';

const obj = {
  key: '1',
  label: <div>您还没有添加喜欢的甜品，快去逛逛吧！</div>,
};

const Layout = (props: any) => {
  let { shopList } = props;

  const { pathname } = useLocation();
  const [modalObj, setModalObj] = useState<{
    open: boolean;
    title: string;
  }>({
    open: false,
    title: '杭州',
  });

  const { open, title } = modalObj;

  return (
    <ConfigProvider
      getPopupContainer={() =>
        document.getElementById('LayoutBox') as HTMLElement
      }
    >
      <div id="LayoutBox" className={styles.container}>
        <header
          style={{
            position: pathname === '/home' ? 'fixed' : 'static',
            backgroundColor: pathname === '/home' ? '#ffffff66' : '#fff2',
            borderBottom: pathname !== '/home' ? '1px solid #d6bb70' : 'none',
          }}
        >
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
            <Space>
              <Dropdown
                menu={{ items: shopList.length !== 0 ? shopList : [obj] }}
                placement="bottomCenter"
              >
                <LoveType
                  style={{
                    fontSize: 22,
                    margin: '0px 30px',
                    cursor: 'pointer',
                  }}
                />
              </Dropdown>
            </Space>
            <PersonType style={{ fontSize: 22 }} />
          </div>
        </header>
        <div
          className={styles.content}
          style={{
            height: pathname === '/home' ? '100vh' : 'calc(100vh - 100px)',
          }}
        >
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
          </footer>
        </div>

        <div className={styles.online}>
          <div
            className={styles.top}
            onClick={() =>
              document
                .getElementsByClassName(styles.content)[0]
                .scrollTo({ top: 0, behavior: 'smooth' })
            }
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
              document.getElementsByClassName(
                styles.container,
              )[0] as HTMLElement
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
          </Modal>
        )}
      </div>
    </ConfigProvider>
  );
};

const stateToProps = ({ shop }: any) => {
  return { ...shop };
};

export default connect(stateToProps)(Layout);
