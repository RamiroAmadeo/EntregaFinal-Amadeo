import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCof1MejqLD4CwWMiok9rh4K1vPZ_2GSfg",
  authDomain: "curso-coder-8bcd6.firebaseapp.com",
  projectId: "curso-coder-8bcd6",
  storageBucket: "curso-coder-8bcd6.appspot.com",
  messagingSenderId: "356909309467",
  appId: "1:356909309467:web:4c02acdb023349947362be"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);