const store = {
  namespaced: true,
  state: {
    playing: false,
    currentTime: null
  },
  getters: {
    playing: ({ playing }) => playing,
    currentTime: ({ currentTime }) => currentTime
  },
  mutations: {
    setPlaying(state, playing) {
      state.playing = playing;
    },
    setCurrentTime(state, currentTime) {
      state.currentTime = currentTime;
    }
  },
  actions: {
    setPlaying({ commit }, value) {
      commit('setPlaying', value);
    },
    setCurrentTime({ commit }, value) {
      commit('setCurrentTime', value);
    }
  }
};
export default store;
