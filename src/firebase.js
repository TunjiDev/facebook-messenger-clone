import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBWrIb1cdec3Geils7iLsX0uOGqKIMsRxA",
  authDomain: "fb-messenger-clone-a7b3e.firebaseapp.com",
  projectId: "fb-messenger-clone-a7b3e",
  storageBucket: "fb-messenger-clone-a7b3e.appspot.com",
  messagingSenderId: "489891666762",
  appId: "1:489891666762:web:c390595ba584e75723ffb3",
  measurementId: "G-TYZX2TF3WN",
});

const db = firebaseApp.firestore();
export default db;
