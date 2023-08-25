import { createStore } from "vuex";

const store = createStore({
  state: {
    vehicules: null,
  },
  getters: {},
  mutations: {
    vehicules(state, newData) {
      state.vehicules = newData;
    },
  },
  actions: {},
  modules: {},
});

export default store;
