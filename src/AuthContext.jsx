// src/context/AuthContext.js
import { auth } from "firebase";
import React, { createContext, useState, useContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // console.log(currentUser);

  // const signup = (email, password) => {
  //   return createUserWithEmailAndPassword(auth, email, password);
  // };

  const signup = async (email, password, name) => {
    try {
      // Create user account with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update user profile with display name
      await updateProfile(userCredential.user, {
        displayName: name,
      });

      // Return the user object
      return userCredential.user;
    } catch (error) {
      console.error("Signup Error:", error);
      throw error;
    }
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
