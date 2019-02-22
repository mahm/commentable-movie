const store = {
  namespaced: true,
  state: {
    messages: []
  },
  getters: {
    messages: ({ messages }) => {
      return messages || [];
    }
  },
  mutations: {
    addMessage(state, obj) {
      state.messages.push(obj);
    }
  },
  actions: {
    addMessage({ commit }, obj) {
      commit('addMessage', obj);
    }
  }
};
export default store;
