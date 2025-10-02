import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVi19snYV7mD3aY7xjmCkwWqzl4VT9Ehc",
  authDomain: "cookbook-companion-c7f8a.firebaseapp.com",
  projectId: "cookbook-companion-c7f8a",
  storageBucket: "cookbook-companion-c7f8a.firebasestorage.app",
  messagingSenderId: "791020791147",
  appId: "1:791020791147:web:77c887d0cbe70d4c9bd82e",
  measurementId: "G-KGT159X0N7"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
export default app;