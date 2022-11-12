// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADoMbJqQstcH18CzMqZrEaKzsnBZrJPdA",
  authDomain: "twitter-clone-c6714.firebaseapp.com",
  databaseURL: "https://twitter-clone-c6714-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-c6714",
  storageBucket: "twitter-clone-c6714.appspot.com",
  messagingSenderId: "143881378607",
  appId: "1:143881378607:web:d75020ffcf2b1f39385fda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

