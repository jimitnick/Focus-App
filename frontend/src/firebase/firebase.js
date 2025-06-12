import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDNApR8o_08LFFA2mGQeOd76qSDS6rP3ew",
  authDomain: "focus-app-b8936.firebaseapp.com",
  projectId: "focus-app-b8936",
  storageBucket: "focus-app-b8936.firebasestorage.app",
  messagingSenderId: "1077942992802",
  appId: "1:1077942992802:web:f812701e3519e893ea3cfb"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const db = getFirestore(app);

export { app, provider, auth, db };