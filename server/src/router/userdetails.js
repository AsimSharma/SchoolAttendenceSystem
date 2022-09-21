import express from "express"
import validate  from "../middleware/tokenval.js"
import Detailscontroller from "../controller/userdetails.js"
const userrouter=express.Router()
const detailscontroller=new Detailscontroller;
userrouter.get("/all",detailscontroller.getuser)
userrouter.delete("/del/:id",detailscontroller.deluser)
userrouter.get("/edit/:id",detailscontroller.edituser)
userrouter.patch("/update/:id",detailscontroller.updateuser)
userrouter.get("/getjwt",validate, detailscontroller.asim)
export default userrouter;
