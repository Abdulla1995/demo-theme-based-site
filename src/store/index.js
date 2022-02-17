import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  darkMode: false
}

const mutations = {
  TOGGLE_DARK_MODE(state) {
    state.darkMode = !state.darkMode;
  }
}

export default new Vuex.Store({
  state,
  mutations
});