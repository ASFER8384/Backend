import express from 'express'
import { Verifyadmin } from '../utiles/VerfiyToken.js'
import {countName, Createhotel, Deletehotel, gethotel, gethotels, Updatehotel} from "../Controller/Hotel.js"

const Route = express()

Route.post("/",Verifyadmin,Createhotel)
Route.put("/:id",Verifyadmin,Updatehotel)
Route.delete("/:id",Verifyadmin,Deletehotel)
Route.get("/find/:id",gethotel)
Route.get("/",gethotels)
Route.get("/cityName",Verifyadmin,countName)




export default Route;