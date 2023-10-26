// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth";
import {getFirestore } from "firebase/firestore";
import {getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZLjTP0eWNDSonIgOlNk6mrSOPm7nSNaM",
  authDomain: "mealesu-1328.firebaseapp.com",
  projectId: "mealesu-1328",
  storageBucket: "mealesu-1328.appspot.com",
  messagingSenderId: "63396096",
  appId: "1:63396096:web:26cbd30b4534fed738bbe5",
  measurementId: "G-SEEYGZG291"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const  db = getFirestore(app);
export const storage = getStorage(app);