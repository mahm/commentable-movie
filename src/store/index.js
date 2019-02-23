import Vue from 'vue';
import Vuex from 'vuex';
import { firebaseMutations, firebaseAction } from 'vuexfire';
import chat from './modules/chat';
import player from './modules/player';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    chat,
    player
  },
  mutations: {
    ...firebaseMutations
  }
});
