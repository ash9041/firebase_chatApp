// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCLHQF303FXuOJCI159gKxvefLNI7u95XU",
  authDomain: "fir-chatapp-2dc30.firebaseapp.com",
  projectId: "fir-chatapp-2dc30",
  storageBucket: "fir-chatapp-2dc30.appspot.com",
  messagingSenderId: "825090891524",
  appId: "1:825090891524:web:c9d5fe21424c75294b7a51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();