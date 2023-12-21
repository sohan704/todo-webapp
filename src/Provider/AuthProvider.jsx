import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    });
  }


  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
    const observe = onAuthStateChanged(auth, createUser => {
      console.log('shifted', createUser);
      setUser(createUser);
      setLoading(false);
    })
    return () => {
      observe();
    }
  }, [])

  const authInfo = {
    createUser,
    signIn,
    logOut,
    user,
    updateUserProfile,
    loading,
    googleLogin

  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;