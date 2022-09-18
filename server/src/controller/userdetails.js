import registermodel from "../database/models/user.js";
export default class Detailscontroller{

 //getdata
 async getuser(req,res){
    try{
  const response= await registermodel.find({})
  res.status(200).json({success:true,response})
    }catch(e){
   console.log(e)
   res.status(500).json({message:e.message,success:false,stack:e.stack})
    }
  }
//delete
async deluser(req,res){
  try{
   const id=req.params.id;
   const response= await registermodel.delete({_id:id})
   res.status(200).json({success:true})
  }catch(e){
    console.log(e)
    res.status(500).json({message:e.message,stack:e.stack})
  }
}
}