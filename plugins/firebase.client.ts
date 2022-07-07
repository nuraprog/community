import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: "AIzaSyCKPvRacq93834D1geW0PsPI5s1t0F34rQ",
    authDomain: "vue-auth-731bc.firebaseapp.com",
    projectId: "vue-auth-731bc",
    storageBucket: "vue-auth-731bc.appspot.com",
    messagingSenderId: "677869585734",
    appId: "1:677869585734:web:5176e9de86742d99fb9147",
  };
  const auth = getAuth();

  initializeApp(firebaseConfig);
  initUser();

  nuxtApp.vueApp.provide("auth", auth);
  nuxtApp.provide("auth", auth);
});
