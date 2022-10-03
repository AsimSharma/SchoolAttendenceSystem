import express from "express"
import validate  from "../middleware/tokenval.js"
import AdminController from "../controller/adcontroller.js"


const adminroute=express.Router()
const admincontroller=new AdminController;

//admin login
adminroute.post("/admin",admincontroller.adminlog)
export default adminroute;