import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGnEhkt6Z79Lzilg7VCC67CIlRWIaAwEA",
  authDomain: "fir-todo-7a891.firebaseapp.com",
  projectId: "fir-todo-7a891",
  storageBucket: "fir-todo-7a891.appspot.com",
  messagingSenderId: "889743649067",
  appId: "1:889743649067:web:c80fc0008faf5194023d6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
// console.log(auth)
export { db , auth };