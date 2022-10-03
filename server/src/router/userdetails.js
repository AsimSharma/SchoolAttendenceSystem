import express from "express"

import Detailscontroller from "../controller/userdetails.js"
const userrouter=express.Router()
const detailscontroller=new Detailscontroller;
userrouter.get("/all",detailscontroller.getuser)
userrouter.delete("/del/:id",detailscontroller.deluser)


//router for serch filter
userrouter.get("/searchfilter",detailscontroller.searchuser)


userrouter.get("/edit/:id",detailscontroller.edituser)
userrouter.patch("/update/:id",detailscontroller.updateuser)

export default userrouter;
