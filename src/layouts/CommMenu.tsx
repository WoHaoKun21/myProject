import { NavLink, useLocation } from '@umijs/max';
import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import routes from '../../config/routes';
import styles from './index.less';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

const CommMenu: React.FC = () => {
  const { pathname } = useLocation(); // 获取当前路径
  const [selectKeys, setSelectKeys] = useState([pathname]);

  // 生成Menu菜单
  const renderMenu = (data: any[]) => {
    return data.map((item) => {
      if (item?.routes && !item.hideInMenu) {
        return (
          <SubMenu key={item.path} title={item.name}>
            {renderMenu(item?.routes)}
          </SubMenu>
        );
      }
      return (
        !item.hideInMenu && (
          <MenuItem key={item?.path} title={item?.name}>
            <NavLink to={item?.path} title={item.name}>
              {item.name}
            </NavLink>
          </MenuItem>
        )
      );
    });
  };

  const handleRoutes = (interRoutes: any[], routes?: any[]) => {
    if (routes) {
      return interRoutes?.map((i) => {
        const obj = routes.find((j) => j.path === i.path) || {};
        const newObj = {
          ...i,
          ...obj,
          name: i.name,
        };
        if (i?.children && obj?.routes) {
          newObj.routes = handleRoutes(i.children, obj.routes);
        } else {
          delete newObj.routes;
        }
        delete newObj.children;
        return newObj;
      });
    } else {
      return interRoutes;
    }
  };

  useEffect(() => {
    const path = pathname;
    setSelectKeys([path]);
  }, [pathname]);

  return (
    <div className={styles.center}>
      <Menu
        theme="light"
        mode="horizontal"
        selectedKeys={selectKeys}
        onClick={(data: any) => setSelectKeys([data.key])}
      >
        {renderMenu(handleRoutes(routes || []))}
      </Menu>
    </div>
  );
};

export default CommMenu;
