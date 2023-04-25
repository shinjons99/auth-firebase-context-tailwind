// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9ZfDVdNGAlQJgbTR8nhBjKbw4cy152NI",
  authDomain: "auth-firebase-context-ta-5f1c3.firebaseapp.com",
  projectId: "auth-firebase-context-ta-5f1c3",
  storageBucket: "auth-firebase-context-ta-5f1c3.appspot.com",
  messagingSenderId: "457887784208",
  appId: "1:457887784208:web:8d827245779b1e0ecad995"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;