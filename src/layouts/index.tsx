import { LoveType, PersonType, SearchType } from '@/components/Icon';
import { ShopArr } from '@/models/shop';
import { ArrowUpOutlined, CloseOutlined } from '@ant-design/icons';
import { connect, history, Outlet, useDispatch, useLocation } from '@umijs/max';
import {
  ConfigProvider,
  Dropdown,
  Input,
  MenuProps,
  message,
  Modal,
  Space,
} from 'antd';
import React, { useState } from 'react';
import CommMenu from './CommMenu';
import styles from './index.less';

const obj = {
  key: '1',
  label: <div>您还没有添加喜欢的甜品，快去逛逛吧！</div>,
};

const Layout: React.FC<ShopArr> = ({ shopList, user }) => {
  const [search, setSearch] = useState<{ open: boolean; value: string }>({
    open: false,
    value: '',
  });
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <div>游客登陆</div>,
      onClick: () => {
        if (user.login) {
          return message.success('您已使用游客身份登录！');
        }
        history.push('/login');
      },
    },
    user.login
      ? {
          key: '2',
          label: <div>退出登陆</div>,
          onClick: () => {
            dispatch({ type: 'shop/removeLogin', payload: { login: false } });
            dispatch({ type: 'shop/remove', payload: [] });
          },
        }
      : null,
  ];

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
            <div>
              <img src="/logo.png" alt="" />
            </div>
            <span>甜点DESSERT</span>
          </div>
          {!search.open && <CommMenu />}
          <div
            className={styles.right}
            style={{ width: search.open ? 538 : 'auto' }}
          >
            {search.open && (
              <>
                <CloseOutlined
                  style={{ fontSize: 16 }}
                  onClick={() => {
                    history.push('/cake', { value: '' });
                    setSearch({ open: false, value: '' });
                  }}
                />
                <Input
                  value={search.value}
                  placeholder="请输入甜点名称"
                  onChange={(e: any) => {
                    setSearch((d) => ({ ...d, value: e.target.value }));
                  }}
                  onPressEnter={(e: any) => {
                    history.push('/cake', { value: e.target.value });
                  }}
                  style={{ width: 150, margin: '0 8px' }}
                />
              </>
            )}
            <SearchType
              onClick={() => {
                if (search.open) {
                  history.push('/cake', { value: search.value });
                  return;
                }
                setSearch((d) => ({ ...d, open: true }));
              }}
            />
            <Space>
              <Dropdown
                menu={{
                  items: shopList.length !== 0 ? shopList : ([obj] as any[]),
                }}
                placement="bottomCenter"
              >
                <LoveType
                  className={styles.love}
                  onClick={() => history.push('/loveList')}
                  style={{ margin: '0px 30px' }}
                />
              </Dropdown>
            </Space>

            <Space>
              <Dropdown menu={{ items }} placement="bottomCenter">
                <PersonType className={styles.person} />
              </Dropdown>
            </Space>
          </div>
        </header>
        <div
          id="content"
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
              <li onClick={() => history.push('/home')}>首页</li>
              <li onClick={() => history.push('/cake')}>甜点甄选</li>
              <li onClick={() => history.push('/dessert')}>甜品优选</li>
              <li onClick={() => history.push('/convert')}>甜点专区</li>
              <li onClick={() => history.push('/convert')} />
              <li onClick={() => history.push('/convert')} />
              <li onClick={() => history.push('/convert')} />
              <li onClick={() => history.push('/convert')} />
            </ul>
            <div className={styles.info}>
              愿你的生活像刚出炉的舒芙蕾，外表看似脆弱，内心却藏着云朵般的柔软与温热。每一次品尝都是对美好的重新定义，每一口甜蜜都是生活给你的温柔拥抱。愿你在平凡的日子里，也能像甜品师一样，用心调配属于自己的幸福配方——用耐心做底料，用热爱当糖霜，把挫折化作巧克力碎屑，洒在人生的蛋糕上，让它成为最独特的装饰。生活或许会有苦涩，但你永远可以选择用甜点般的视角，去发现那些藏在角落里的微光与小确幸。愿你的每一天，都能被甜蜜治愈，被温柔以待。{' '}
            </div>
          </footer>
        </div>

        <div className={styles.online}>
          <div
            className={styles.top}
            onClick={() =>
              document
                .getElementById('content')!
                .scrollTo({ top: 0, behavior: 'smooth' })
            }
          >
            <ArrowUpOutlined style={{ fontSize: 30, marginBottom: 5 }} />
            <span>返回顶部</span>
          </div>
        </div>
      </div>
      <Modal
        title="提示"
        centered
        okText="去登陆"
        cancelText="取消"
        open={user.open}
        onOk={() => {
          history.push('/login');
          dispatch({ type: 'shop/addLogin', payload: { open: false } });
        }}
        onCancel={() =>
          dispatch({ type: 'shop/addLogin', payload: { open: false } })
        }
      >
        <div style={{ textAlign: 'center' }}>
          登陆后可加入喜欢！是否跳转到登陆页面？
        </div>
      </Modal>
    </ConfigProvider>
  );
};

const stateToProps = ({ shop }: any) => ({ ...shop });

export default connect(stateToProps)(Layout);
