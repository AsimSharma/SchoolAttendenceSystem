// import "../style/LoginUi.css"
// import profile from "../../images/a.png";
// import email from "../../images/email.jpg";
// import pass from "../../images/pass.png";
// import React,{useState} from 'react'
// import { Link,  useNavigate } from "react-router-dom";
// import api from "../service/api"

// const LoginUi = () => {
//   const[user,setuser]=useState({})
// const navigate=useNavigate()

//  const hitdata=async()=>{
// try{
// const response=await api.post("/adminlog/admin",{...user})

// console.log(response)
// }catch(e){
// console.log("error from admin login ",e)
// }
//  }
//  const logindata=(e)=>{
//     console.log(e.target.value)
//     setuser({...user,[e.target.value]:e.target.name})

//  }
//   return (
//     <>
   
//     <div>
//       <div className="main">
//      <div className="sub-main">
//        <div>
//          <div className="imgs">
//            <div className="container-image">
//              <img src={profile} alt="profile" className="profile"/>
//            </div>
//          </div>
//          <div>
//            <h1>Adminlogin Page</h1>
//            <div>
//              <img src={email} alt="email" className="email"/>
//              <input onChange={logindata} name="Email" type="text"   placeholder="Email" className="name"/>
//            </div>
//            <div className="second-input">
//              <img src={pass} alt="pass" className="email"/>
//              <input onChange={logindata} name="Password" type="password"  placeholder="password" className="name"/>
//            </div>
//           <div className="login-button">
//           <button onClick={hitdata} style={{"backgroundColor":"green","width":"300px"}} >Login</button>
//           </div>
           
            
 
//          </div>
//        </div>
//      </div>
//     </div>
//     </div>
//     </>
//   )
// }

// export default LoginUi
import "../style/LoginUi.css"
import profile from "../../images/a.png";
import email from "../../images/email.jpg";
import pass from "../../images/pass.png";
import name from "../../images/name.png";
import phone from "../../images/phone.png";
import React,{useState} from 'react';
import {Link,useNavigate } from "react-router-dom";
import api from "../service/api"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const users={
  
    Email:"",
    Password:"",
   
}
const AdminLoginUi = () => {
 const navigate=useNavigate();

 const [user,setuser]=useState(users)
 const push=(e)=>{
    console.log(user)
    setuser({...user,[e.target.name]:e.target.value})
 }
 const trigger=async()=>{
  try{
    
  const response=await api.post("/adminlog/admin",{...user})
  toast.success("succesfully data send in to database")

    navigate("/admin")
  
    
  
  console.log(response)
  }catch(e){
    console.log("error while post data from register",e)
   
  }
  
 }
  return (
    <>
   
    <div>
    <ToastContainer/>
      <div className="main">
     <div className="sub-main"style={{"height":"590px"}}>
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>
           </div>
         </div>
         <div>
           <h1>SignUp Page</h1>
           
           <div>
             <img src={email} alt="Email" className="email"/>
             <input  onChange={push} name="Email" type="email" placeholder="Enter your Email" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass"  className="email"/>
             <input  onChange={push} name="Password" type="password" placeholder="Enter your password" className="name"/>
           </div>
          
           
          <div className="login-button">
          <button style={{"width":"150px","borderRadius":"20px","backgroundColor":"green","marginBottom":"10px"}} onClick={trigger}>Sign Up</button>
          </div>
           
           
 
         </div>
       </div>
     </div>
    </div>
    </div>
    </>
  )
}

export default AdminLoginUi

