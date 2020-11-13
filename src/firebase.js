import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgtPCnmK9YHV-PMItlkU3ctxGrvU9yz58",
  authDomain: "react-slack-clone-eae69.firebaseapp.com",
  databaseURL: "https://react-slack-clone-eae69.firebaseio.com",
  projectId: "react-slack-clone-eae69",
  storageBucket: "react-slack-clone-eae69.appspot.com",
  messagingSenderId: "772379934068",
  appId: "1:772379934068:web:9317fa6b947c8f8ed14021",
  measurementId: "G-2XPHJCJLDB"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
