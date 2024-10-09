import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, SetCurrentUser] = useState();

  //remove after testing
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    //set user to current uses, else null
    const unsubscribe = auth.onStateChanged((user) => {
      SetCurrentUser(user);
    });
    //unsubscribe from listner when component is unmounted
    return unsubscribe;
  }, []);

  const value = { currentUser, signup };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
