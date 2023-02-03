import Hotel from "../Model/Hotel.js"


export const Createhotel = async(req, res) => {
    const CreateHotel = new Hotel(req.body)
    try {
        const SavedHotel = await CreateHotel.save()
        res.status(200).json(SavedHotel)
    } catch (err) {
        throw (err);
    }
}


export const Updatehotel = async(req, res) => {
    try {
        const Updatehotel = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(Updatehotel)
    } catch (err) {
        throw (err);
    }
}

export const Deletehotel = async(req,res) => {
    const newHotel = new Hotel(req.body)
    try {
     await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Deleted")
    } catch (err) {
        throw (err);
    }
}

export const gethotel = async(req,res) => {
    // const getHotel = new Hotel(req.body)
    try {
    const hotel= await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (err) {
        throw (err);
    }
}

export const gethotels = async(req,res,next) => {
        try {
    const hotels= await Hotel.find()
        res.status(200).json(hotels)
    } catch (err) {
        next(err);
    }
}

export const countName = async(req,res,next) => {
const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city})
        }))
    res.status(200).json(list)
} catch (err) {
    next(err);
}
}



