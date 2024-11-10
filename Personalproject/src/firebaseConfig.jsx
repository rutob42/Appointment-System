// Import the necessary Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Import Firebase Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgJHGrv_gyZ7R_avDhAk0yjFnf32-UGpo",
  authDomain: "doctorauthapp.firebaseapp.com",
  projectId: "doctorauthapp",
  storageBucket: "doctorauthapp.firebasestorage.app",
  messagingSenderId: "880630536232",
  appId: "1:880630536232:web:0641f069ddd8add0de7d1d",
  measurementId: "G-SDFX35SHDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
// Initialize Firebase Authentication

// Optionally, initialize analytics (if needed)

export {app, auth};