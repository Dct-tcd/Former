import React, { useState } from 'react'
import { auth, googleProvider } from "./Firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Forme } from './Forme';
export default function Auth() {

    const [userSign, setuserSign] = useState("");

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          setuserSign(uid);
        } else {
          setuserSign("");
        }
      });
    

    const signin = async () => {
        try {
        //   setrr("none");
          await signInWithPopup(auth, googleProvider);
        } catch (err) {
          console.error(err);
        }
      };

  return (
    <div >
         {userSign == "" ? (
      <button style={{marginTop:"100%",padding:"15%",color:"white",backgroundColor:"blue",borderRadius:"5px"}} onClick={signin}>Signin</button>
            ) : (
<Forme/>
)}
    </div>
  )
}
