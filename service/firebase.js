
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL9WCGjiXH4VV8Ce_BYue57LNYd3-v_yQ",
  authDomain: "spyware-bd0d5.firebaseapp.com",
  projectId: "spyware-bd0d5",
  storageBucket: "spyware-bd0d5.appspot.com",
  messagingSenderId: "805269363364",
  appId: "1:805269363364:web:b89ba96883109dd3a6e431",
  measurementId: "G-03HCP8GHGT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);