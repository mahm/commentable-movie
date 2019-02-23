import firebase from 'firebase';
import 'firebase/firestore';

const options = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_DATABASEURL,
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID
};

if (firebase.apps.length === 0) {
  const firebaseApp = firebase.initializeApp(options);
  const firestore = firebaseApp.firestore();
  firestore.settings({
    timestampsInSnapshots: true
  });
}

export const app = firebase.app();
export default firebase;
