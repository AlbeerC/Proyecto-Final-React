import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCcb_mtSYXoNz8LRQnujajJyVSloJ28ux4",
  authDomain: "backend-gamershop.firebaseapp.com",
  projectId: "backend-gamershop",
  storageBucket: "backend-gamershop.appspot.com",
  messagingSenderId: "371567593466",
  appId: "1:371567593466:web:766679f11f5ba5445ac643"
};


const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);