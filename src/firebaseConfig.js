// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzeENZkhCIDZPvAqsBqZ53p0L_I6Z5kDI",
    authDomain: "boardo-b4398.firebaseapp.com",
    projectId: "boardo-b4398",
    storageBucket: "boardo-b4398.appspot.com",
    messagingSenderId: "256822830817",
    appId: "1:256822830817:web:6139dfaa2267dbf59df9a0",
    measurementId: "G-M3TWSBWB0G"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
