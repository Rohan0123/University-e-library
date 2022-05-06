import firebase from "firebase/compat/app"; 
import "firebase/compat/auth"
import "firebase/compat/firestore"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9166W6wJpBqXVoW4WtacGszuxSqKUBkk",
  authDomain: "cuoelibrary.firebaseapp.com",
  projectId: "cuoelibrary",
  storageBucket: "cuoelibrary.appspot.com",
  messagingSenderId: "933037763651",
  appId: "1:933037763651:web:6499dbe196c5c167b878f6",
  measurementId: "G-HGQJTZ57R7"
};

//Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();



export {db, auth}
