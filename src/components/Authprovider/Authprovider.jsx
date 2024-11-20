
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

export const authContext = createContext()

export const Authprovider = ({routes}) => {
 
    // googleprovider
      const provider = new GoogleAuthProvider()



// login user information save useState
const [user,setUser] = useState(null);
const [loading , setLoading] = useState(true)
    // register 
    const handleRegister = (email, password) => {
      console.log(email,password)
   return createUserWithEmailAndPassword(auth,email, password)
   
    // .then(res => signOut(auth))
    }

    // login
    const handleLogin = (email,password) => {
      return  signInWithEmailAndPassword(auth,email,password)
     
    }

    // google login
    const googleLogin = () => {
      return  signInWithPopup(auth,provider)
    }

    // update profile image and name show
    const manageProfile = (name,image) => {
      return  updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
          })
    }


    // logout
    const handleLogout = () => {
     signOut(auth);
    }

    // value call function 
    const authInfo = {
        handleRegister,
        handleLogin,
        googleLogin,
        handleLogout,
        manageProfile,
        user,
        setUser,
        loading
    }

    // user login information onauthchange save useeefect diye bosate hobe je porjonto logout nije theke kora na hoy
   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        console.log(currentUser);
        if(currentUser){
            setUser(currentUser)
        }
        else{
            setUser(null)
        }
        setLoading(false)
        return ()=>{
          unsubscribe();
        }
    })
   },[])
    
    return (
        <div>
            <authContext.Provider value={authInfo}>{routes}</authContext.Provider>
        
        </div>
    );
};

export default Authprovider;