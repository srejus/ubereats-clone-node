const Cart = require('../models/cartModel');

const mongoose = require('mongoose');


const addToCart = async(req,res) => {
    try{
        const {id} = req.params;
        // check if this item for this user already exists if not create one
        const userId = new mongoose.Types.ObjectId(req.user.id);
        const itemId = new mongoose.Types.ObjectId(id);
        const cartItem = await Cart.findOne({user_id:userId,item_id:itemId});
        const quantity = req.body.quantity;
        if(cartItem){
            if(quantity === 0){
                await Cart.findByIdAndDelete(cartItem.id)
                return res.status(200).json({message:"Cart deleted successfully!"});
            }
            await Cart.findByIdAndUpdate(cartItem.id,{quantity:req.body.quantity})
            return res.status(200).json({message:"Cart Updated Successfully"});
        }
        else{
            if(quantity === 0){
                return res.status(200).json({message:"No cart to delete!"});
            }
            const newCart = await Cart.create(
                {
                    quantity:req.body.quantity,
                    user_id:req.user.id,
                    item_name:req.body.item_name,
                    item_id:id,
                    total_price:0
                }
            )
            if(newCart) {
                return res.status(200).json({message:"Cart created successfully"});
            }
        }
        res.status(400).json({error:"Something went wrong"});
    } catch(err) {
        res.status(400).json({error:err.message});
    }
}


module.exports = {
    addToCart
}