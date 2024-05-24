// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS6lw4U0wwJcHVn7a4Dr0_uIsYaFDsaVg",
  authDomain: "react-blog-app-73216.firebaseapp.com",
  projectId: "react-blog-app-73216",
  storageBucket: "react-blog-app-73216.appspot.com",
  messagingSenderId: "1059306919646",
  appId: "1:1059306919646:web:81b33875895986b0a0d44f",
  measurementId: "G-C1G4ESQ8CN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const db = getFirestore(app);
