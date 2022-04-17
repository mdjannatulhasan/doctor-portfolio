// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiz8EqVw-gSQxCgRPBmb-g_tAkpIHU_gU",
  authDomain: "doctor-sakib.firebaseapp.com",
  projectId: "doctor-sakib",
  storageBucket: "doctor-sakib.appspot.com",
  messagingSenderId: "766771444741",
  appId: "1:766771444741:web:39b56174a1a3fb7ddb706c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;