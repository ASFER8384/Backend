import express from 'express'
import { VerfiyToken, Verifyadmin, Verifyuser } from '../utiles/VerfiyToken.js'
import { DeleteUser, getUser, getUsers, UpdateeUser } from '../Controller/User.js'

const Route = express()


// Route.get("/checkauth",VerfiyToken,(req,res,next)=>{
//     res.send("you are logeed in")
// })
// Route.get("/checkuser/:id",Verifyuser,(req,res,next)=>{
//     res.send("you are logeed in")
// })

// Route.get("/checkadmin/:id",Verifyadmin,(req,res,next)=>{
//     res.send("hI ADMIN")
// })


Route.delete("/:id",Verifyuser,DeleteUser)
Route.delete("/:id",Verifyuser,UpdateeUser)
Route.get("/:id",Verifyuser,getUser)
Route.get("/",Verifyadmin,getUsers)




export default Route;