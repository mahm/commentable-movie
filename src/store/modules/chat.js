const store = {
  namespaced: true,
  state: {
    messages: [],
    scoredMessages: {}
  },
  getters: {
    messages: ({ messages }) => {
      return messages || [];
    },
    scoredMessages: ({ scoredMessages }) => {
      return scoredMessages;
    }
  },
  mutations: {
    addMessage(state, obj) {
      state.messages.push(obj);
      const scoredTime = Math.ceil(obj.currentTime);
      if (!state.scoredMessages[scoredTime]) {
        state.scoredMessages[scoredTime] = [];
      }
      state.scoredMessages[scoredTime].push(obj);
    }
  },
  actions: {
    addMessage({ commit }, obj) {
      commit('addMessage', obj);
    }
  }
};
export default store;
