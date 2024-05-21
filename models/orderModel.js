const mongoose = require('mongoose');


const orderSchema = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'user'
    },
    total_price: {
        type: Number,
        required: true,
        default: 0.0
    },
    customer_name: {
        type: String,
        required: true
    },
    customer_phone: {
        type: Number,
        required: true
    },
    customer_email: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "ORDER PLACED"
    }
},
{
    timestamps:true
});

const orderItemSchema = mongoose.Schema(
    {
        order_id: {
            type: mongoose.Schema.ObjectId,
            required: true,
            ref: 'order'
        },
        item_name: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            default: 1
        },
        total_price: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)




const Order = mongoose.model("order",orderSchema);
const OrderItem = mongoose.model("order_items",orderItemSchema);


module.exports = {
    Order,
    OrderItem
}