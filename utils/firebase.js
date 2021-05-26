import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAL633O2INwKZA2dz3t7d753DpopZKeUNE",
  authDomain: "hackermanlinks.firebaseapp.com",
  projectId: "hackermanlinks",
  storageBucket: "hackermanlinks.appspot.com",
  messagingSenderId: "592002351039",
  appId: "1:592002351039:web:91f7d7753ab7026389eb0a",
  measurementId: "G-WEQJ7YT794",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const auth = app.auth();

export { auth };
export default db;
