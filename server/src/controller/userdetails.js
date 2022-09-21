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
  const id=req.params.id;
  try{
   
   const response= await registermodel.findOneAndDelete({_id:id})
   res.status(200).json({success:true})
  
  }catch(e){
    console.log(e)
    res.status(500).json({message:e.message,stack:e.stack})
  }
}
//find by id
async edituser(req,res){
  const id=req.params.id
  try{
   const response=await registermodel.findById(id)
   res.status(200).json(response)
  }catch(e){

    res.status(500).json({success:false,message:e.message,stack:e.stack})
  }
}
//updateuser
async updateuser(req,res){
  const id=req.params.id
  const update={...req.body}
  const opts={new:true}
  try{
  const response= await registermodel.findOneAndUpdate({_id:id},update,opts)
  res.json(response)
  }catch(e){
    res.status(500).json({success:false,stack:e.stack})
  }
}
async asim(req,res){

  if(req.user.isAdmin){
  res.send("hello asim ")}
  else{
res.send("you are not allowed  to enrer")
  }
}
}