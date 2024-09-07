
import React, { createContext,useEffect,useState } from 'react';
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, setPersistence, 
    browserLocalPersistence  } from "firebase/auth";
import { OAuthProvider } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthenticationContext = createContext(null);


export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log('Persistence set to local');
  })
  .catch((error) => {
    console.error('Error setting persistence:', error);
  });

const AuthenticationProvider = ({children}) => {
    const appleProvider = new OAuthProvider('apple.com');
    appleProvider.addScope('email');
appleProvider.addScope('name');
    const provider = new GoogleAuthProvider();
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn=()=>{
        
       return signInWithPopup(auth, provider)
 
    }
    const appleSignIn = () => {
        signInWithPopup(auth, appleProvider)
        .then((result) => {
           
            const user = result.user;

            const credential = OAuthProvider.credentialFromResult(result);
            if (credential) {
                const accessToken = credential.accessToken;
                const idToken = credential.idToken;

                
            }

            console.log("Signed in successfully:", user);
        })
        .catch((error) => {
       
            console.error("Error during Apple sign-in:", error);
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData?.email; 
            const credential = OAuthProvider.credentialFromError(error);

            
        });
    };
   
    
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
      };

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
          
            setUser(loggedUser);
            
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authenticationInfo = {
        user,
        setLoading,
        loading,
        registerUser,
        logIn,
        logOut,
        googleSignIn,
        appleSignIn
        
     
    }

    return (
        <AuthenticationContext.Provider value={authenticationInfo}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export default AuthenticationProvider;