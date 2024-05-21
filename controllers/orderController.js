const mongoose = require('mongoose');
const {Order,OrderItem} = require('../models/orderModel');
const Cart = require('../models/cartModel');


const createOrder = async(req,res) => {
    try{
        const user_id = req.user.id;
        const userId = new mongoose.Types.ObjectId(user_id);
        const cart = await Cart.find({user_id:userId});
        if(!cart || cart.length === 0) {
            return res.status(404).json({error:"No items found in cart!"});
        }

        const orderPayload = {
            customer_name:req.user.fullname,
            customer_phone:req.user.phone,
            customer_email:req.user.email,
            user_id:req.user.id
        }

        const order = await Order.create(orderPayload);
        if(order) {
            for(let i = 0;i < cart.length; i++) {
                await OrderItem.create({
                    item_name:cart[i].item_name,
                    quantity:cart[i].quantity,
                    total_price:100,
                    order_id:order.id
                })
                await Cart.findByIdAndDelete(cart[i]._id);
            }
            // delete cart if success
            
            return res.status(201).json({message:"Order Created Successfully!"});
        }
    } catch(err) {
        res.status(400).json({error:err.message});
    }
}


module.exports = {
    createOrder
}