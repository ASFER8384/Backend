import bcrypt from 'bcrypt'
import Users from '../Model/User.js';
import {CreateError} from '../utiles/CreateError.js';
import jwt from "jsonwebtoken"



export const Register = async (req, res, next) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    try {
        const newUser = Users({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })
        await newUser.save()
        res.status(200).send("sucessfully created")
    } catch (err) {
        next(err)
    }
}

export const Login = async (req, res, next) => {
    try {
        const user = await Users.findOne({ username: req.body.username })
        if (!user) return next(CreateError(409, "Username Wrong"))

        const Password = await bcrypt.compare(req.body.password, user.password)
        if (!Password) return next(CreateError(404, "Password Wrong"))

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT)
        const { password, isAdmin, ...OtherDetails } = user._doc

        res.cookie("acess_token", token, { httpOnly: true }).status(200).json({ ...OtherDetails })
    } catch (err) {
        next(err)
    }
}