import React, {createContext, useContext, useEffect, useState} from 'react';
import {auth} from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

//context for authentication
const AuthContext = createContext();

export function AuthProvider({children}){
    const [currentUSer, setCurrentUser] = useState(null);

    useEffect(() => {
        //listen for changes in the user's auth state
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });

        //unsubscribe from the listener when the component is not touched
        return () => unsubscribe();
    }, []);

    return(
        <AuthContext.Provider value={{ currentUSer}}>
            {children}
        </AuthContext.Provider>
    );
}

//custom hook to use the AuthContext in other components
export function useAuth(){
    return useContext(AuthContext);
}
