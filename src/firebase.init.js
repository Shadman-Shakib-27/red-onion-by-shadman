// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx7PZyRPNzqCAQS3GkIxSlSe8XcZ178FI",
  authDomain: "red-onion-by-alvi.firebaseapp.com",
  projectId: "red-onion-by-alvi",
  storageBucket: "red-onion-by-alvi.appspot.com",
  messagingSenderId: "888733411400",
  appId: "1:888733411400:web:c7a1430a11cc1c8e0d107d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
