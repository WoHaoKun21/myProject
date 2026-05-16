import { cakeLists } from '@/assets/cake';

export type ShopItem = {
  id: number;
  name: string;
  img?: string;
  price?: string;
  weight?: string;
  taste?: number;
  norms?: number;
  address?: string;
  msg?: string;
  remark?: string;
};

export type ShopArr = {
  user: { login: boolean; open: boolean };
  shopList: ShopItem[];
  cakeLists: ShopItem[];
};

const test = {
  namespace: 'shop',
  state: {
    user: { open: false, login: false },
    shopList: [],
    cakeLists, // 全部甜点列表
  },

  reducers: {
    addLogin(state: any, { payload }: any) {
      return { ...state, user: { ...state.user, ...payload } };
    },

    removeLogin(state: any, { payload }: any) {
      return { ...state, user: { ...state.user, ...payload } };
    },

    add(state: any, { payload }: any) {
      return { ...state, shopList: payload };
    },

    remove(state: any, { payload }: any) {
      return { ...state, shopList: payload };
    },
  },
};

export default test;
