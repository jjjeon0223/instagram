// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEJZCXKstko8AnjA-nJRqocTgTAQAvxew",
  authDomain: "instagram-7e62a.firebaseapp.com",
  projectId: "instagram-7e62a",
  storageBucket: "instagram-7e62a.appspot.com",
  messagingSenderId: "767814099000",
  appId: "1:767814099000:web:015122a75dfbed3c4506cd",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
