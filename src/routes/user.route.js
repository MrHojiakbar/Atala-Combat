import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { ValidationMiddleware } from "../middleware/validation.middleware.js";
import { registerSchema } from "../Schema/user.schema.js";
const userRouter=Router()
userRouter.post("/register",ValidationMiddleware(registerSchema),registerUser)

export default userRouter