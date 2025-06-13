// src/contexts/UserContext.js
import React, { createContext, useState, useEffect } from 'react';

import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, provider } from '../firebase/firebase';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  // Google sign-in function
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); // Firebase User object
    } catch (error) {
      console.error("Google Sign-in Error:", error);
    }
  };

  // Google sign-out
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Cleanup
  }, []);

  return (
    <UserContext.Provider value={{ user,setUser, loginWithGoogle, logout }}>
      {children}
    </UserContext.Provider>
  );
};
