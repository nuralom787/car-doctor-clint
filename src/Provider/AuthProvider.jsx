import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from "axios";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // Create New User.
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };


    // Login User.
    const SigninUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };


    // Logout User.
    const Logout = () => {
        setLoading(true);
        return signOut(auth)
    };




    // Check Current User Status.
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setUser(currentUser);
            setLoading(false);
            if (currentUser) {
                axios.post("https://react-car-doctor-server-five.vercel.app/jwt", loggedUser, { withCredentials: true })
                    .then(result => {
                        // console.log(result.data);
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
            }
            else {
                axios.post("https://react-car-doctor-server-five.vercel.app/logout", loggedUser, { withCredentials: true })
                    .then(result => {
                        // console.log(result.data);
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
            }
        })
        return () => {
            return unsubscribe();
        }
    }, []);



    // Auth Provider Values.
    const authInfo = {
        user,
        loading,
        createNewUser,
        SigninUser,
        Logout,
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;