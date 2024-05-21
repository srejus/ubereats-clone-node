const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const cartSchema = mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.ObjectId,
            required: true,
            ref: "user"
        },
        item_id: {
            type: mongoose.Schema.ObjectId,
            required: true,
            ref:"product"
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
);


const cart = mongoose.model("cart", cartSchema);

module.exports = cart;