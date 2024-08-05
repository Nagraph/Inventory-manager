// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:1234 ,
  authDomain: "inventory-management-860b5.firebaseapp.com",
  projectId: "inventory-management-860b5",
  storageBucket: "inventory-management-860b5.appspot.com",
  messagingSenderId: "708790154508",
  appId: "1:708790154508:web:b50d76374238df4b4f8529",
  measurementId: "G-GCBCN6THZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}