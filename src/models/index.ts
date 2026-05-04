import { Effect, Reducer, Subscription } from '@umijs/max';
// 全局页面model的state类型
export interface IndexModelState {
  name: string;
}

export interface IndexModelType {
  namespace: string;
  state: IndexModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    // save: Reducer<IndexModelState>;
    // 启用 immer 之后
    save?: Reducer<IndexModelState>;
    changeName?: Reducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}

// home页面的redux
const IndexModel: IndexModelType = {
  namespace: 'home',

  state: {
    name: '芯牧云信息技术有限公司',
  },

  // 异步任务：建议使用generator函数，因为async/await发现无法调用put这个功能
  effects: {
    // call：call(函数, 参数)；put：put({ type: "save", payload: 数据 })
    *query({ payload }, { call, put }): any {
      yield put({ type: 'save', payload });
    },
  },

  // 同步任务：改变state，并引发所有connect的组件更新
  reducers: {
    save(state, action) {
      console.log(state, action);
      return {
        ...state,
        ...action.payload,
      };
    },
  },

  // 订阅——监听指定变化
  subscriptions: {
    // @umi/max版本，数据监听不会再初始化的时候进行调用了
    setup({ dispatch, history }) {
      history.listen(({ location: { pathname } }) => {});
    },
  },
};

export default IndexModel;
