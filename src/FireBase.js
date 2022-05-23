import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDDkkE1_HCFJIJAQh5PxceVE5qvKEqLioY",
    authDomain: "store-7d8e0.firebaseapp.com",
    projectId: "store-7d8e0",
    storageBucket: "store-7d8e0.appspot.com",
    messagingSenderId: "665445248688",
    appId: "1:665445248688:web:187083094c8301fe4a9575",
    measurementId: "G-73263YPNMW"
  };

  const app = initializeApp(firebaseConfig);
  export const db= getFirestore(app)