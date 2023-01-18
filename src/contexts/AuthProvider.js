import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // Sign Up
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Login
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Update User
  const updateUser = (userInfo) => {
    return updateProfile(user, userInfo);
  };

  //   LogOut
  const logOut = () => {
    return signOut(auth);
  };

  //   Cheack Currrent User
  useEffect(() => {
    const unSubscrive = onAuthStateChanged(auth, (currentUser) => {
      console.log("user observing");
      setUser(currentUser);
    });
    return () => unSubscrive();
  }, []);

  const authInfo = {
    createUser,
    logIn,
    user,
    updateUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
