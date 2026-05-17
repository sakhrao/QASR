// QASR — Firebase (Modular SDK)
// ============================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc, orderBy, query, setDoc, Timestamp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA6jdUSM2-ZAw8HoU5H8GtrMqlyhbmgtXU",
  authDomain: "qasr-shop-91359.firebaseapp.com",
  projectId: "qasr-shop-91359",
  storageBucket: "qasr-shop-91359.firebasestorage.app",
  messagingSenderId: "655967154496",
  appId: "1:655967154496:web:56b4fc5f86848bc8a00aa5",
  measurementId: "G-8QL6V3NX05"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged, signInWithEmailAndPassword, signOut };
export { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc, orderBy, query, setDoc, Timestamp };