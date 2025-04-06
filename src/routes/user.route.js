import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user.controller.js";
import { ValidationMiddleware } from "../middleware/validation.middleware.js";
import { loginSchema, registerSchema } from "../Schema/user.schema.js";
const userRouter=Router()
userRouter.post("/register",ValidationMiddleware(registerSchema),registerUser)
userRouter.post("/login",ValidationMiddleware(loginSchema),loginUser)

export default userRouter