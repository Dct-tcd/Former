import React, { useState } from 'react'
import { db, googleProvider, auth, storage } from "./Firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  query,
  orderBy,
  limit,
  uid,
} from "firebase/firestore";
export const Forme = () => {

    const roomsCollectionRef = collection(db, "rooms");
 const [list, setlist] = useState([]);
    const [namer, setnamer] = useState("");
const [email, setemail] = useState("");
const [phone, setphone] = useState("");

    const submiter = async (e) => {

  if (namer=="") alert("Give a valid name");
  if (phone.length!=10) alert("Give a valid phone number");

            e.preventDefault();
            const ans = Number(new Date());
            try {
              await addDoc(roomsCollectionRef, {
                name: namer,
                email: email,
                phone: phone,
                createdAt:ans,
              });
            } catch (err) {
              console.error(err);
            }
          };
// console.log()
const getroomList = async () => {
try {
    const q = query(
      roomsCollectionRef,
    //   orderBy("createdAt", "asc"),
    //   limit(6)
    );
    const data = await getDocs(q);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    // console.log(filteredData,);
    setlist(filteredData);
  } catch (err) {
    console.error(err);
  }
};
console.log(list);

    return (
        <div style={{display:"flex",justifyContent:"center",
        marginRight:"20%",padding:"10%",marginTop:"50%",
        marginBottom:"10%",backgroundColor:"silver",flexDirection:"column"
        ,width:"300px",
        }}>
            <h1 style={{textAlign:"center",}}>Login Form</h1>           
           
           <form onSubmit={submiter}>


           <div style={{display:"flex",justifyContent:"center"}}>
          <input  
          style={{borderRadius:"5px",margin:"3%"}}
          placeholder='Name' type="text" onChange={(e)=>{setnamer(e.target.value)}}/>
          </div>
          <div style={{display:"flex",justifyContent:"center"}}>
          <input 
          
          style={{borderRadius:"5px",margin:"3%",}}
          placeholder='email' type='email' onChange={(e)=>{setemail(e.target.value)}}/>
          </div>
          <div style={{display:"flex",justifyContent:"center"}}>
          <input 
          
          style={{borderRadius:"5px",margin:"3%",}}
          placeholder='phone no.' type="number" onChange={(e)=>{setphone(e.target.value)}}/>
          </div>
          <div style={{display:"flex",justifyContent:"center"}}>
          <button    style={{backgroundColor:"#8ebf42",color:"white"}}
       > Submit </button>
       </div>
           </form>
           </div>
    )
}