// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDId-4YGdyIb1m-EMb47aZq66rqzGyxp-8",
  authDomain: "flipkart-clone-969ab.firebaseapp.com",
  projectId: "flipkart-clone-969ab",
  storageBucket: "flipkart-clone-969ab.appspot.com",
  messagingSenderId: "772074806914",
  appId: "1:772074806914:web:a6d3414ea189645f5cde9b",
  measurementId: "G-NND33V5X15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
