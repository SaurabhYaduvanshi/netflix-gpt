// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA47GpPLzOJuFixgdXc4qeskXMokShAQGY",
  authDomain: "netflixgpt-1311c.firebaseapp.com",
  projectId: "netflixgpt-1311c",
  storageBucket: "netflixgpt-1311c.firebasestorage.app",
  messagingSenderId: "783023544433",
  appId: "1:783023544433:web:1baeee7ea330e6e560a3d0",
  measurementId: "G-Z6368V6FS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


 export const auth = getAuth();