import express from 'express'
import { Verifyadmin } from '../utiles/VerfiyToken.js'
import { Createroom, Deleteroom, getroom, getRooms, Updateroom } from '../Controller/rooms.js'

const Route = express()

Route.post("/:hotelid",Verifyadmin,Createroom)
Route.put("/:id",Verifyadmin,Updateroom)
Route.delete("/:id/:hotelid",Verifyadmin,Deleteroom)
Route.get("/:id",getroom)
Route.get("/",getRooms)




export default Route;