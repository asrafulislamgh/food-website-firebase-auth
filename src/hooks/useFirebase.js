import {
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import { useState } from "react";
import initializingAuthentication from "../Firebase/firebase.init";
initializingAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();

  //   Changing state
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user.user);
    } else {
      setUser({});
    }
  });

  //   Google signin
  const handleGoogleSignin = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //   Logout
  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };
  return {
    user,
    error,
    handleGoogleSignin,
    logOut,
  };
};
export default useFirebase;
