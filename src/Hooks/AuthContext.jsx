import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();
/*
export function useAuth() {
  return useContext(AuthContext);
}
*/

export const AuthProvider = ({ children }) => {
  const [currentUser, SetCurrentUser] = useState(null);

  //is this needed?
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    //set user to current uses, else null
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      SetCurrentUser(user);
    });
    //unsubscribe from listner when component is unmounted
    return unsubscribe;
  }, []);

  //const value = { currentUser, signup };

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
