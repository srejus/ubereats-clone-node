const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        restaurant_id:{
            type: mongoose.Schema.ObjectId,
            required: true,
            ref:"restaurant"
        },
        item_name:{
            type: String,
            required: [true, "'item_name' is required"]
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);


const products = mongoose.model("product",productSchema);


module.exports = products;