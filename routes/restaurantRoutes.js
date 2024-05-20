const express = require('express');

const auth = require("../middlewares/authMiddleware");

const {getRestaurants,createRestaurant,updateRestaurant} = require('../controllers/restaurantController');

const router = express.Router();

// routes

router.get("/",getRestaurants);
router.post("/create",auth, createRestaurant);
router.put("/edit/:id",auth, updateRestaurant);


module.exports = router;