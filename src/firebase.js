// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH1NLgyReyYa8buWrWDLS5jCI1F9q38wk",
  authDomain: "agent-form-c7438.firebaseapp.com",
  projectId: "agent-form-c7438",
  storageBucket: "agent-form-c7438.appspot.com",
  messagingSenderId: "536257748275",
  appId: "1:536257748275:web:b9ec7180d52e563b7bf246",
  measurementId: "G-CPY9TSB6N5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);