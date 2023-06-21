import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkPZgI85zZ1NPTuF6lyL6byYY66LKTDV0",
  authDomain: "siter-bc513.firebaseapp.com",
  projectId: "siter-bc513",
  storageBucket: "siter-bc513.appspot.com",
  messagingSenderId: "611694953242",
  appId: "1:611694953242:web:cd09d62d586b2b747c62a3",
  measurementId: "G-TFV1K6VM48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);