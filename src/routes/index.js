import { Router } from "express";
import userRouter from "./user.route.js";

const router=Router()

router.use("/users",userRouter)
router.use("/register",(req,res)=>{ 
    res.render('register')
})
router.use("/login",(req,res)=>{ 
    res.render('login')
})
router.get("/",(req,res)=>{
    res.redirect("/register")
})

export default router