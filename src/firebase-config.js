// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhUwlGOmF0zRKWFEF7p2iYYloD1aBZqOU",
  authDomain: "mobile-app-testing-6faa4.firebaseapp.com",
  projectId: "mobile-app-testing-6faa4",
  storageBucket: "mobile-app-testing-6faa4.appspot.com",
  messagingSenderId: "176710324719",
  appId: "1:176710324719:web:6d029b1d1bac2f07a4a61a",
  measurementId: "G-NP6MZNJKK2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const twitterProvider = new TwitterAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
