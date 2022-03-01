// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJo5oh9Yqp7cr99FsJks3LrruujxRY2uY",
  authDomain: "blog-site-536c2.firebaseapp.com",
  projectId: "blog-site-536c2",
  storageBucket: "blog-site-536c2.appspot.com",
  messagingSenderId: "99507367030",
  appId: "1:99507367030:web:ed9a2333cce77ce2084357"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const AuthKey = getAuth(app);