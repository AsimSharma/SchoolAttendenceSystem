import "./style/LoginUi.css"
import profile from "./../images/a.png";
import email from "./../images/email.jpg";
import pass from "./../images/pass.png";
import React,{useState} from 'react'
import { Link,  useNavigate } from "react-router-dom";
import api from "./service/api";
const userdata={
  Email:"",
  Password:""
}
const LoginUi = () => {
  const[data,setdata]=useState(userdata)
const navigate=useNavigate()
 const trigger=(e)=>{
  setdata({...data,[e.target.value]:e.target.name})
  console.log(data)
 }
 const log=async()=>{
  try{
  const response= await api.post("user/log",{...data})
  console.log(response)
  }catch(e){
  console.log("error while sending data from from login",e)
  }
 }
  return (
    <>
   
    <div>
      <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>
           </div>
         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="text" onChange={trigger} name="Email"  placeholder="Email" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" onChange={trigger} name="Password" placeholder="password" className="name"/>
           </div>
          <div className="login-button">
          <button onClick={log}>Login</button>
          </div>
           
            <p className="link">
              <a href="#">Forgot password ?</a> Or <Link to={"/register"}>Sign Up</Link>
            </p>
 
         </div>
       </div>
     </div>
    </div>
    </div>
    </>
  )
}

export default LoginUi