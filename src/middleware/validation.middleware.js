import { BaseException } from "../errors/base.error.js";

export const ValidationMiddleware =(schema)=>{
    return (req,_,next)=>{
        const {error,value}=schema.validate(req.body);
        if (error) {
            throw new BaseException(error.message,400);
        }
        req.body=value
        next()
    }
}