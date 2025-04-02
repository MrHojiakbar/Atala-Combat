import { BaseException } from "../errors/base.error.js";
import userModel from '../models/user.model.js';
import { registerSchema } from "../Schema/user.schema.js";

export const registerUser=async (req,res,next) => {
    try {        
        const { error, value } = registerSchema.validate(req.body);
        if (error) {
            throw new BaseException(error.message,400);
        }
        const {name,email,password}=value
        const findUser=await userModel.findOne({email})
        
        if (findUser) {
            throw new BaseException("user already exists",409);
        }

        const newUser=await userModel.create({
            name,
            email,
            password
        })
        res.send({
            message:"succes",
            data:newUser
        })

    } catch (error) {
        next(error)
    }
}