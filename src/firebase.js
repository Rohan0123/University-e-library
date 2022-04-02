// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfEDp8dqEY457RpMueS2O6ZamS8nRP3Uk",
  authDomain: "cuo-e-books.firebaseapp.com",
  projectId: "cuo-e-books",
  storageBucket: "cuo-e-books.appspot.com",
  messagingSenderId: "450063210406",
  appId: "1:450063210406:web:b441ade45c92a6a3e1a167",
  measurementId: "G-0E2SV14LNT"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const db = firebaseApp.firestore();
const auth = auth();

export { db, auth }