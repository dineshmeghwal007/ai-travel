import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk-Eu3S1j6xCbZhZ5B029AFfBoQNrqHT4",
  authDomain: "apps-e21da.firebaseapp.com",
  projectId: "apps-e21da",
  storageBucket: "apps-e21da.firebasestorage.app",
  messagingSenderId: "825016403724",
  appId: "1:825016403724:web:6876c18a207fca99a8ab29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth };