import mongoose from "mongoose";
import adminmodel from "../database/models/login.js"
import registermodel from "../database/models/user.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config"
export default class AdminController{


 async adminlog(req,res){
// try{


// const email=req.body.Email;
//  const passw=req.body.Password;
// const response=await  registermodel({Email:email})

// const  matching=bcrypt.compareSync(response.Password,passw)
// console.log(matching)
// if (matching){
//   jwt
//   const token= jwt.sign({id:response._id,isAdmin:response.isAdmin,Name:response.Name },process.env.JWT_SECRET,{
//     expiresIn:"7d",
//   })
//   res.json({sucess:true, token})
// res.status(200).json(response)
  
// }else{
//   res.json("loggin failled")
// }

// }catch(e){
//     res.status(404).json({message:e.message,success:false,stack:e.stack})
// }
//  }
}
 }