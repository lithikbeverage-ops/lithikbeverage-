// config.js

// Import the required Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIDcG2w_NkZoIA2QLzqdXO-V5Tzi4i31U",
  authDomain: "billingsoftware-515c3.firebaseapp.com",
  projectId: "billingsoftware-515c3",
  storageBucket: "billingsoftware-515c3.firebasestorage.app",
  messagingSenderId: "534823632385",
  appId: "1:534823632385:web:adf95369d555cf4874ca00",
  measurementId: "G-MFWDRMEFKK"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Analytics and Firestore (Database)
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Export 'db' and 'app' so your other files can access them
export { app, analytics, db };
