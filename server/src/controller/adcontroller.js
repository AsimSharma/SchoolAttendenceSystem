import mongoose from "mongoose"
import adminmodel from "../database/models/login.js"
export default class AdminController{

async adminlog(req,res){
   try{
    const response =new adminmodel(req.body)
    const data=await response.save()
    res.status(200).json(data)
   }catch(e){
    res.status(500).json({message:e.message,success:false,stack:e.stack})
   }
}

}