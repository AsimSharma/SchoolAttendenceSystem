import express from "express"
import AdminController from "../controller/adcontroller.js"
const adminroute=express.Router()
const admincontroller=new AdminController;
adminroute.post("/admin",admincontroller.adminlog)
export default adminroute;