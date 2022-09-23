import "../style/LoginUi.css"
import profile from "../../images/a.png";
import email from "../../images/email.jpg";
import pass from "../../images/pass.png";
import React,{useState} from 'react'
import { Link,  useNavigate } from "react-router-dom";


const LoginUi = () => {
  const[user,setuser]=useState({})
const navigate=useNavigate()

 
 const logindata=(e)=>{
    console.log(e.target.value)
    setuser({...user,[e.target.value]:e.target.name})
  console.log(user)
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
           <h1>Adminlogin Page</h1>
           <div>
             <img src={email} alt="email" className="email"/>
             <input onChange={logindata} name={user.Email} type="text"   placeholder="Email" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input onChange={logindata} name={user.Password} type="password"  placeholder="password" className="name"/>
           </div>
          <div className="login-button">
          <button style={{"backgroundColor":"green","width":"300px"}} >Login</button>
          </div>
           
            
 
         </div>
       </div>
     </div>
    </div>
    </div>
    </>
  )
}

export default LoginUi