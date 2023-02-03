import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import hotelRoute from "./Routes/Hotel.js"
import authRoute from "./Routes/Auth.js"
import userRoute from "./Routes/User.js"
import roomRoute from "./Routes/Rooms.js"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

const PORT = 4500;


dotenv.config()



app.use(cookieParser())

app.use(express.json())
app.use(cors())
app.use("/hotel",hotelRoute)
app.use("/auth",authRoute)
app.use("/user",userRoute)
app.use("/room",roomRoute)


app.use((err,req,res,next)=>{
    const errstatus = err.status||500
    const errmessage=err.message||"something went wrong"
   return res.status(errstatus).json({
        sucess:false,
        status:err.status,
        message:err.message,
        stack:err.stack
    })
})


const Connect= async()=>{
    console.log("MOngoDb is Connected!")
    try {
        await mongoose.connect(process.env.MONGOSH);
      } catch (err) {
        throw(err);
      }
}

mongoose.connection.on('disconnected',()=>{
console.log("mongo is disconnected")
})

mongoose.connection.on('connected',()=>{
    console.log("mongo is connected")
    })
    

app.listen(PORT,()=>{
    Connect()
    console.log("BackEnd Connected!")
})