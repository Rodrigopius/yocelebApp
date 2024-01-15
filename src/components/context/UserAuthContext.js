import { createContext, useEffect, useState, useContext } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebasee';

// Create the context
export const UserAuthContext = createContext();

// Create the context provider component
export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  // Function to sign up a new user
  function SignUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Function to log in a user
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Function to log out a user
  function logOut() {
    return signOut(auth);
  }

  // Set up an effect to listen for changes in authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Clean up the subscription when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  // Provide the context value to the components
  const contextValue = {
    user,
    SignUp,
    logIn,
    logOut,
  };

  return (
    <UserAuthContext.Provider value={{user, SignUp, logIn}}>
      {children}
    </UserAuthContext.Provider>
  );
}

// Create a custom hook to use the context
export function useUserAuth() {
  return useContext(UserAuthContext);
}
