// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
