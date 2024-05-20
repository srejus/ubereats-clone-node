const Restaurant = require("../models/restaurantModel");

const getRestaurants = async(req,res) => {
    try{
        const restaurants = await Restaurant.find();
        res.status(200).json(restaurants);
    }catch(err) {
        res.status(400).json({error:err.message});
    }
}


const createRestaurant = async(req,res) => {
    try{
        const restaurant = await Restaurant.create(req.body);
        if(restaurant){
            return res.status(200).json(restaurant);
        }
        res.status(400).json({error:"Something went wrong!"});
    } catch(err) {
        res.status(400).json({error:err.message});
    }
}

const updateRestaurant = async(req,res) => {
    try{
        const {id} = req.params;
        const restaurant = await Restaurant.findById(id);
        if(!restaurant) {
            return res.status(404).json({error:"No restaurant found with the given id!"});
        }
        const updatedData = await Restaurant.findByIdAndUpdate(id,req.data);
        res.status(200).json(updatedData);
    }catch(err) {
        res.status(400).json({error:err.message});
    }
}


module.exports = {
    getRestaurants,
    createRestaurant,
    updateRestaurant
}