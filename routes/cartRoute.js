const express = require('express');
const auth = require("../middlewares/authMiddleware");

const {addToCart} = require('../controllers/cartController');

const router = express.Router();


// Routes
router.post('/add-to-cart/:id',auth, addToCart)

module.exports = router;