

import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvlOVd5J_sW45jr8wxmmgz_we5IR0bucA",
  authDomain: "todoassign.firebaseapp.com",
  projectId: "todoassign",
  storageBucket: "todoassign.appspot.com",
  messagingSenderId: "71958580933",
  appId: "1:71958580933:web:55b7e7688ad48f5c17aaac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;