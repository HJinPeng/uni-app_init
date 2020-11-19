import { makeAction } from '../utils.js';

export default {
  namespaced: true,

  state: {
    infoList: null,
  },

  mutations: {
    GET_INFO_LIST(state, data = []) {
      state.infoList = data;
    },
  },

  actions: {
    getInfoList: makeAction({
      baseUrl: 'devplatformRequest',
      mutationType: 'GET_INFO_LIST',
      url: '/sys/randomImage?key=' + +new Date(),
    }),

    resetInfoList({ commit }, payload) {
      commit('GET_INFO_LIST', []);
    },
  },
};
