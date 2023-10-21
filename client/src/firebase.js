// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mohit-estate.firebaseapp.com",
  projectId: "mohit-estate",
  storageBucket: "mohit-estate.appspot.com",
  messagingSenderId: "459525438228",
  appId: "1:459525438228:web:ebd6df6604863467542001"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);