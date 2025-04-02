import Joi from 'joi';
  

export const registerSchema=Joi.object({
    name:Joi.string().min(3).max(55).required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(8).max(32).required(),
    coin:Joi.number().default(0),
})

export const loginSchema=Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().min(8).max(32).required(),
})