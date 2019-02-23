import firebase, { app } from '../../config/firebase';
import { firebaseAction } from 'vuexfire';
import _ from 'lodash';
const db = app.firestore();
const movieRef = db.collection('movies').doc('xAeLdnXWdi57PjLWi74A');
const messagesRef = movieRef.collection('messages');

const store = {
  namespaced: true,
  state: {
    messages: [],
    movie: {}
  },
  getters: {
    messages: ({ messages }) => {
      return _.sortBy(messages, ['currentTime']) || [];
    },
    scoredMessages: ({ movie }) => {
      return movie.scoredMessages || {};
    }
  },
  actions: {
    addMessage({ state }, obj) {
      const payload = {
        ...obj,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      };
      messagesRef.add(payload);
      const scoredTime = Math.ceil(obj.currentTime);
      let updatedScoredMessages = state.movie.scoredMessages || {};
      if (!updatedScoredMessages[scoredTime]) {
        updatedScoredMessages[scoredTime] = [];
      }
      updatedScoredMessages[scoredTime].push(obj);
      movieRef.update({ scoredMessages: updatedScoredMessages });
    },
    init: firebaseAction(({ bindFirebaseRef }) => {
      console.log('init');
      bindFirebaseRef('messages', messagesRef);
      bindFirebaseRef('movie', movieRef);
    })
  }
};
export default store;
