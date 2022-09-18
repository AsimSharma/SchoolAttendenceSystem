import registermodel from "../database/models/user.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// import"dotenv/config";
class regcontroller{
 async userreg(req,res){
    try{
        if(req.body.Password){
       const pass=await bcrypt.hash(req.body.Password,10);
      
       
       
     const data=new registermodel({...req.body,Password:pass})
     const result= await data.save();
     res.json(result)}
     else{
        res.status(404).json({message:"password doesnot match",success:false})
     }
    }catch(e){
        res.status(404).json({message:e.message,success:false})
        console.log(e)
    }
  }
  //login
 async userlog(req,res){
try{
const email=req.body.Email;
const passw=req.body.Password;
const response=await  registermodel.findOne({Email:email})

console.log(response)
const  matching=bcrypt.compareSync(passw,response.Password)
console.log(matching)
if (matching){
  //jwt
  const token= jwt.sign({id:response._id,Username:response.Name},"mysecretkey")
  res.json({sucess:true,token})
  
}else{
  res.json("loggin failled")
}

}catch(e){
    res.status(404).json({message:e.message,success:false,stack:e.stack})
}
 }
 
}

export default regcontroller;
