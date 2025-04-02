import { Router } from "express";
import userRouter from "./user.route.js";

const router=Router()

router.use("/users",userRouter)
router.use("/",(req,res)=>{ 
    res.render('register')
})

export default router