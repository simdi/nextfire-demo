import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAspT0D32WzYLMvuwxnXcpnaivlRTICoc0",
  authDomain: "nextfire-demo-49221.firebaseapp.com",
  projectId: "nextfire-demo-49221",
  storageBucket: "nextfire-demo-49221.appspot.com",
  messagingSenderId: "269826994304",
  appId: "1:269826994304:web:5466ffe05bf7701136f665",
  measurementId: "G-WNZ7T7J2V8"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();