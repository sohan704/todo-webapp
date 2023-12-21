// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYJBYbfoEUZ2l9goTmhS66o6i00O1Q3Bs",
  authDomain: "task-manager-36267.firebaseapp.com",
  projectId: "task-manager-36267",
  storageBucket: "task-manager-36267.appspot.com",
  messagingSenderId: "446214702761",
  appId: "1:446214702761:web:0047f2b072ed740d604bb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;