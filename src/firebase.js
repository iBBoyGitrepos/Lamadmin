import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY, 
  authDomain: "lamadmin-id.firebaseapp.com",
  projectId: "lamadmin-id",
  storageBucket: "lamadmin-id.firebasestorage.app",
  messagingSenderId: "105028372088",
  appId: "1:105028372088:web:bfec068ef1a6d3b30f8f8d",
  measurementId: "G-0LQG8V01DQ"
};

const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
// const analytics = getAnalytics(app);


