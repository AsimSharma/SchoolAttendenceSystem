import mongoose from "mongoose"
const atttSchema=new mongoose.Schema({
    Roll:{
        type:Number,
        required:true,
        
    },
    Sname:{
     
     
     type:String,
     required:true,
    },

    Date: { type: Date,
         default: Date.now
        
        },

    Attend:{
        type:Boolean,
        required:true,
       },
  
})
const atttmodel=new mongoose.model("attt",atttSchema)
export default atttmodel;