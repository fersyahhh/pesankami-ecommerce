import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdqY5SekHk4GhdqLw9BhPD1rF_VHG1zlU",
  authDomain: "pesankami-ecommerce.firebaseapp.com",
  projectId: "pesankami-ecommerce",
  storageBucket: "pesankami-ecommerce.firebasestorage.app",
  messagingSenderId: "167136152018",
  appId: "1:167136152018:web:dc2866e356ae6939b8200b",
  measurementId: "G-7PMZ0ZZCGC",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
