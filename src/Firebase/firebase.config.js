// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLK45d4d9Z8tPftCnxnrppE0-yf1Bo7io",
  authDomain: "react-dragon-news-auth-dfce3.firebaseapp.com",
  projectId: "react-dragon-news-auth-dfce3",
  storageBucket: "react-dragon-news-auth-dfce3.firebasestorage.app",
  messagingSenderId: "321504848499",
  appId: "1:321504848499:web:4a6c486c96b17a77145806"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;