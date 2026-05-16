import { CloseOutlined } from '@ant-design/icons';
import { Dispatch } from '@umijs/max';
import styles from './index.less';

let list: any[] = [];
export const remove = (shop: any, dispatch: Dispatch, shopList?: any[]) => {
  let newList = [];
  if (shopList) {
    newList = shopList.filter((o) => o.name !== shop.name);
  } else {
    newList = list.filter((o) => o.name !== shop.name);
  }
  list = newList;
  dispatch({ type: 'shop/remove', payload: newList });
};

export const commCode = (shop: any, shopList: any[], dispatch: Dispatch) => {
  const obj = {
    ...shop,
    key: shop.name,
    label: (
      <div className={styles.shop}>
        <img src={shop.img ?? '/'} />
        <div>
          <div>{shop.name ?? '-'}</div>
          <div>
            {shop.price}/约{shop.weight}
          </div>
        </div>
        <CloseOutlined
          className={styles.close}
          onClick={() => remove(shop, dispatch)}
        />
      </div>
    ),
  };
  const newList = [...shopList];
  const index = newList.findIndex((o) => o.name === obj.name);
  if (index === -1) newList.push(obj);
  else return [];
  list = newList;
  return newList;
};
