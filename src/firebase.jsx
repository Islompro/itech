import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDiuOejJyOFQx9b4CCo7Z-XsxCppQ5IDf4",
  authDomain: "itec-b1be9.firebaseapp.com",
  projectId: "itec-b1be9",
  storageBucket: "itec-b1be9.appspot.com",
  messagingSenderId: "140780718872",
  appId: "1:140780718872:web:73c25e1afb6e897c3cec6d",
  measurementId: "G-YV4SKFCS3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const firestorege = getStorage(app);
