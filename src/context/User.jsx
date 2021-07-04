//Import Libraires
import React, { createContext, useState, useEffect } from "react";

//Import Firebase
import firebase from "../lib/firebase";

//Create Context
const UserContext = createContext();

// user collection
const UserCollection = firebase.firestore().collection("user");

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userAuth) => {
      if (userAuth !== null) {
        UserCollection.doc(userAuth.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              const userData = doc.data();
              setUser(userData);
              setRedirect(false);
            } else {
              setRedirect(true);
            }
          })
          .catch((err) => {
            setRedirect(true);
          });
      } else {
        setRedirect(true);
      }
    });
  }, []);

  const signOut = () => firebase.auth().signOut();

  const signUp = (_email, _password) =>
    firebase.auth().createUserWithEmailAndPassword(_email, _password);

  const signIn = (_email, _password) =>
    firebase.auth().signInWithEmailAndPassword(_email, _password);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        signOut,
        signIn,
        signUp,
        redirect,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
