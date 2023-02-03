import Hotel from "../Model/Hotel.js"
import Rooms from "../Model/Rooms.js"



export const Createroom = async (req, res, next) => {
    const hotelId = req.params.hotelid
    const newRoom = new Rooms(req.body)
    try {
        const SavedRoom = await newRoom.save()
        try {
            await Hotel.findByIdAndUpdate(hotelId,{$push:{ rooms: SavedRoom. _id } })
        } catch (err) {
            next(err)
        }
        res.status(200).json(SavedRoom)
    } catch (err) {
        next(err)
    }
}


export const Deleteroom = async (req,res,next) => {
    const hotelId = req.params.hotelid
    try {
        await Rooms.findByIdAndDelete(req.params.id)
        try {
            await Hotel.findByIdAndUpdate(hotelId,{$pull:{ rooms:req.params.id} })
        } catch (err) {
            next(err)
        }
        res.status(200).json("Deleted")
    } catch (err) {
        next (err);
    }
}


export const Updateroom = async (req, res) => {
    try {
        await Rooms.findByIdAndDelete(req.params.id)
        res.status(200).json("Deleted")
    } catch (err) {
        throw (err);
    }
}


export const getroom = async (req,res) => {
    try {
        const room = await Rooms.findByIdAndUpdate(req.params.id)
        res.status(200).json(room)
    } catch (err) {
        throw (err);
    }
}

export const getRooms = async (req,res) => {
    try {
        const rooms = await Rooms.find()
        res.status(200).json(rooms)
    } catch (err) {
        throw (err);
    }
}