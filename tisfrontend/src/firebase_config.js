import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjL-DEkmtY2e3ncIIytbp5DVwS9_QM9MA",
  authDomain: "proyectotis-61d5a.firebaseapp.com",
  projectId: "proyectotis-61d5a",
  storageBucket: "proyectotis-61d5a.firebasestorage.app",
  messagingSenderId: "225753090136",
  appId: "1:225753090136:web:293f5cea4badbc7ba3e22d",
  measurementId: "G-2PZEK81WGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
