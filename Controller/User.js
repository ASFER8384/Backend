import Users from "../Model/User.js"

export const DeleteUser = async(req,res) => {
    const Deleteusers = new Users(req.body)
    try {
     await Deleteusers.findByIdAndDelete(req.params.id)
        res.status(200).json("Deleted")
    } catch (err) {
        throw (err);
    }
}

export const UpdateeUser = async(req,res) => {
    try {
    const updateUser=  await Users.findByIdAndUpdate(req.params.id)
        res.status(200).json(updateUser,{new:true})
    } catch (err) {
        throw (err);
    }
}

export const getUser = async(req,res) => {
    try {
    const user= await Users.findByIdAndUpdate(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        throw (err);
    }
}

export const getUsers = async(req,res) => {
    try {
    const users= await Users.find()
        res.status(200).json(users)
    } catch (err) {
        throw (err);
    }
}





