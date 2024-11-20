// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy3eyZ7RRcn2-qdmHCmxSm5WS8dip8WYk",
  authDomain: "conceptiual-2.firebaseapp.com",
  projectId: "conceptiual-2",
  storageBucket: "conceptiual-2.firebasestorage.app",
  messagingSenderId: "796998265327",
  appId: "1:796998265327:web:5ea5a810dee5fa3db16e1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;