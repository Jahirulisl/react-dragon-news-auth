import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
 export const AuthContext = createContext();

 const auth = getAuth(app);

 const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null); 
      // red mor loding dila nathaker somadan part-1 strt
    const [loading,setLoading]= useState(true);
      // red mor loding dila nathaker somadan end
    console.log(loading,user);

       // for update user profile stp 1 start>
     const updateUserProfile = (updatedData) =>{
        return updateProfile(auth.currentUser,updatedData);
     }
     // for update user profile stp 1 end

      //get valut stp 1 start>
    const createNewUser=(email,password) =>{
        //loading off
        setLoading(true);
     return createUserWithEmailAndPassword(auth,email,password);
    };
    const userLogin =(email,password)=>{
           //loading off
         setLoading(true);
          //loading off end
        return signInWithEmailAndPassword(auth,email,password);

    }
    //from sign out
    const logout =()=>{
           //loading off start
           setLoading(true);
           //loading off end
        return signOut(auth)
    }
    const authInfo={
        user,
        setUser,
        createNewUser,
        logout,
        userLogin,
        loading,
        updateUserProfile,//up profile saher
    };
    //onAuthStateChanged use korbo
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser=>{
           setUser(currentUser);
            // red mor loding dila nathaker somadan  part 2 strt
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    return (
       <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider> 
    );
};

export default AuthProvider;