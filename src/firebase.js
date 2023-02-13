// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvIVmV9r4FLNsGvNRCwNMxbEC4L4eO3tU",
  authDomain: "bdbdg-main.firebaseapp.com",
  projectId: "bdbdg-main",
  storageBucket: "bdbdg-main.appspot.com",
  messagingSenderId: "504809732424",
  appId: "1:504809732424:web:2744fa09a87278c5025b7d",
  measurementId: "G-WT3P2ECNMK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
