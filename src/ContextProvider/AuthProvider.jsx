import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword,  getAuth,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";


export const AuthContext=createContext(null)

const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState('')
    const [loading,setLoading]=useState(true)

    const googleProvider= new GoogleAuthProvider();

    const createUser=(email,password)=>
    {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>
    {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout=()=>
    {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserInfo=(name,photo)=>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    const googleSignIn= ()=>
    {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>
    {
        const unSubscribe=onAuthStateChanged(auth,currentUser=>
            {
                setUser(currentUser)
                setLoading(false)
            });
            return ()=>
            {
               return unSubscribe();
            }
    },[])

    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        logout,
        updateUserInfo,
        googleSignIn

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;