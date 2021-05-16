import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDraaCDLqtaY8jH48Dm5eTITSUb1dT8Eeg",
  authDomain: "linkedin-clone-a70aa.firebaseapp.com",
  projectId: "linkedin-clone-a70aa",
  storageBucket: "linkedin-clone-a70aa.appspot.com",
  messagingSenderId: "1053064515096",
  appId: "1:1053064515096:web:587cb0adf54948f2303d6d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export { db, auth };
