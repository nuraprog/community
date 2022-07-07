import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKPvRacq93834D1geW0PsPI5s1t0F34rQ",
  authDomain: "vue-auth-731bc.firebaseapp.com",
  projectId: "vue-auth-731bc",
  storageBucket: "vue-auth-731bc.appspot.com",
  messagingSenderId: "677869585734",
  appId: "1:677869585734:web:5176e9de86742d99fb9147",
};
const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app);
