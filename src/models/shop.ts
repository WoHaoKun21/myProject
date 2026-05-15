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
  shopList: ShopItem[];
  cakeLists: ShopItem[];
};

const test = {
  namespace: 'shop',
  state: {
    user: {},
    shopList: [],
    cakeLists, // 全部甜点列表
  },

  reducers: {
    add(state: any, { payload }: any) {
      return { ...state, shopList: payload };
    },

    remove(state: any, { payload }: any) {
      return { ...state, shopList: payload };
    },
  },
};

export default test;
