// == firebase config file ==
// this file configures your api keys, authDomain, id's etc
// it uses this data to connect your app to the firebase backend 
// API keys should be stored as environment variables 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnhvO0B1aplLaWMIfbSE2_MSk5Xdf102U",
  authDomain: "chatapp-ea415.firebaseapp.com",
  projectId: "chatapp-ea415",
  storageBucket: "chatapp-ea415.appspot.com",
  messagingSenderId: "750123691573",
  appId: "1:750123691573:web:0a6207da6c50b4ca71cb7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(); 

export { auth }