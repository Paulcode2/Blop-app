// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import {  getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRTOTqaE91BqS92iD14hVFsO6i_dKUzYo",
  authDomain: "blog-56a41.firebaseapp.com",
  projectId: "blog-56a41",
  storageBucket: "blog-56a41.appspot.com",
  messagingSenderId: "974103275776",
  appId: "1:974103275776:web:bcdc1b114393c2a1496be5",
  measurementId: "G-Q6893PVYWM"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();