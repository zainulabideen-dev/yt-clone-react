// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBw9EyYFV7-2-7ao54U0dYcG5klqLOmPIw",
  authDomain: "azaadari-9dbe1.firebaseapp.com",
  projectId: "azaadari-9dbe1",
  storageBucket: "azaadari-9dbe1.appspot.com",
  messagingSenderId: "999887624425",
  appId: "1:999887624425:web:1bad2a1cea8725186eb878",
  measurementId: "G-BHRC2G83X7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);
export const provider = new GoogleAuthProvider();
