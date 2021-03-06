import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    minPrice: 0,
    maxPrice: 1,
    sortType: "priceUp",
    currency: "UAH",
    userProducts: ''
  },
  mutations: {
    minPriceValue(state, value) {
      state.minPrice = value;
    },
    maxPriceValue(state, value) {
      state.maxPrice = value;
    },
    sortValue(state, value) {
      state.sortType = value;
    },
    currencyValue(state, value) {
      state.currency = value;
    },
    userProductAdd(state, value) {
      state.userProducts = value;
    }
  },
  actions: {
  },
  modules: {}
});
