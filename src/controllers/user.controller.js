import jwt from "jsonwebtoken";
import { BaseException } from "../errors/base.error.js";
import userModel from '../models/user.model.js';
import { loginSchema, registerSchema } from "../Schema/user.schema.js";
import {ACCESS_TOKEN_SECRET,ACCES_TOKEN_EXPIRE_TIME,REFRESH_TOKEN_EXPIRE_TIME,REFRESH_TOKEN_SECRET} from "../configs/jwt.config.js"

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

        const accesToken=jwt.sign({id:newUser.id},ACCESS_TOKEN_SECRET,{
            expiresIn: ACCES_TOKEN_EXPIRE_TIME
        })
        const refreshToken=jwt.sign({id:newUser.id},REFRESH_TOKEN_SECRET,{
            expiresIn: REFRESH_TOKEN_EXPIRE_TIME
        })

        res.send({
            message:"succes",
            tokens:{
                accesToken:accesToken,
                refreshToken:refreshToken
            },
            data:newUser
        })

    } catch (error) {
        next(error)
    }
}
export const loginUser=async (req,res,next) => {
    try {        
        const { error, value } = loginSchema.validate(req.body);
        if (error) {
            throw new BaseException(error.message,400);
        }
        const {email,password}=value
        const findUser=await userModel.findOne({email})
        
        if (!findUser) {
            throw new BaseException("user not found",404);
        }
        if (findUser.password!=password) {
            res.send({message:"password not true"})
        }
        const accesToken=jwt.sign({id:findUser.id},ACCESS_TOKEN_SECRET,{
            expiresIn: ACCES_TOKEN_EXPIRE_TIME
        })
        const refreshToken=jwt.sign({id:findUser.id},REFRESH_TOKEN_SECRET,{
            expiresIn: REFRESH_TOKEN_EXPIRE_TIME
        })
        res.send({
            message:"succes",
            tokens:{
                accesToken:accesToken,
                refreshToken:refreshToken
            },
            data:findUser
        })
        
    } catch (error) {
        next(error)
    }
}