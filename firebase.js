// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB14hrDFPEy888jWssuX9q3WA2pJwgTUqU",
  authDomain: "instagram-clone-4228f.firebaseapp.com",
  projectId: "instagram-clone-4228f",
  storageBucket: "instagram-clone-4228f.appspot.com",
  messagingSenderId: "969819667249",
  appId: "1:969819667249:web:2610d9f5ea4c801b4b0e10",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
