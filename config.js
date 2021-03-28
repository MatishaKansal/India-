import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDBJgGw0M0FIgoFxjvIvLwZ9qZeAe0iZ04",
  authDomain: "india-statenut.firebaseapp.com",
  projectId: "india-statenut",
  storageBucket: "india-statenut.appspot.com",
  messagingSenderId: "175325515987",
  appId: "1:175325515987:web:5052b911086a7ae33fc426",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
