import { CreateError } from "./CreateError.js";
import jwt from "jsonwebtoken"


export const VerfiyToken=(req,res,next)=>{
    const token = req.cookies.acess_token
    if(!token){
        return next(CreateError(404,"you are not authen"))
    }
jwt.verify(token,process.env.JWT,(err,user)=>{
    if(err) return next(CreateError(404,"Token invalid"))
    req.user=user
    next()
})
}

export const Verifyuser=(req,res,next)=>{
    VerfiyToken(req,res,next,()=>{
        if(req.user.id === req.params.id){
            res.send("you are delete your acct")
            next()
        }else{
     return next(CreateError(404,"you are not authorized"))
        }
    })
}

export const Verifyadmin=(req,res,next)=>{
    VerfiyToken(req,res,next,()=>{
        if(req.user.isAdmin){
            res.send("you are delete all acct")
            next()
        }else{
     return next(CreateError(404,"you are not authorized"))
        }
    })
}