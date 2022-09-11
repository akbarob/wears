// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUUlQeozNHu2V09wsVMfhbeyyG4py1sR8",
  authDomain: "wears-app-server.firebaseapp.com",
  projectId: "wears-app-server",
  storageBucket: "wears-app-server.appspot.com",
  messagingSenderId: "572810007592",
  appId: "1:572810007592:web:5183a008f32df9e9dc911d",
  measurementId: "G-HGYPN58P6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db =getFirestore(app)