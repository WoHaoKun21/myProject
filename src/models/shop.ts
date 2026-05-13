const test = {
  namespace: 'shop',
  state: {
    shopList: [],
    cakeLists: [], // 全部甜点列表
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
