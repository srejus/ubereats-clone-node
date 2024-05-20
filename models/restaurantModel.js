const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema(
    {
        name: {
            type: String,
            requried: [true, "'name' is required"]
        },
        place: {
            type: String,
            required: true
        },
        isOpened: {
            type: Boolean,
            default: false
        },
        totalRating: {
            type: Number,
            default: 0.0
        }
    },
    {
        timestamps: true
    }
);


const restaurants = mongoose.model("restaurant", restaurantSchema);

module.exports = restaurants;