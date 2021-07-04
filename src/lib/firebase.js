import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "REMOVE",
  authDomain: "REMOVE",
  projectId: "REMOVE",
  storageBucket: "REMOVE",
  messagingSenderId: "REMOVE",
  appId: "REMOVE",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default firebase;
