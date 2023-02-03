import express from 'express'
import { Login, Register } from '../Controller/Auth.js'

const Route = express()

Route.post("/reg",Register)
Route.get("/login",Login)


export default Route;