// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8vZYP7PqD1XiOm1U_WERdTIzHTj8nesE",
  authDomain: "netflixgpt-253fa.firebaseapp.com",
  projectId: "netflixgpt-253fa",
  storageBucket: "netflixgpt-253fa.appspot.com",
  messagingSenderId: "1068563955107",
  appId: "1:1068563955107:web:b76753f770643a16cc6e16",
  measurementId: "G-6226GCDZ3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);