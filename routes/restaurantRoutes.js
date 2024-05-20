const express = require('express');

const auth = require("../middlewares/authMiddleware");

const {getRestaurants,createRestaurant,updateRestaurant,deleteRestaurant} = require('../controllers/restaurantController');

const router = express.Router();

// routes

router.get("/",getRestaurants);
router.get("/:id",getRestaurants),
router.post("/create",auth, createRestaurant);
router.put("/edit/:id",auth, updateRestaurant);
router.delete("/delete/:id",auth, deleteRestaurant);


module.exports = router;