import express from "express";
import regcontroller from "../controller/rcontroller.js";
const router=express.Router()
const usercontroller=new regcontroller;
router.post("/reg",usercontroller.userreg)
router.post("/log",usercontroller.userlog)


export default router;