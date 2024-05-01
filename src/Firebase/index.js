import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB0Xhc0tSx2rhywtOUrPxxle6h7wbNPw2c',
  authDomain: 'food-app-897e1.firebaseapp.com',
  projectId: 'food-app-897e1',
  storageBucket: 'food-app-897e1.appspot.com',
  messagingSenderId: '1009219692501',
  appId: '1:1009219692501:web:cb61f29f206a22ecd03f5c',
};

const app = firebase.initializeApp(firebaseConfig); // Utilisez firebase.initializeApp au lieu de initializeApp
export const db = firebase.firestore();
