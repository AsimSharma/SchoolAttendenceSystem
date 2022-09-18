import express from "express"

import Detailscontroller from "../controller/userdetails.js"
const userrouter=express.Router()
const detailscontroller=new Detailscontroller;
userrouter.get("/all",detailscontroller.getuser)
userrouter.delete("/del",detailscontroller.deluser)
export default userrouter;
