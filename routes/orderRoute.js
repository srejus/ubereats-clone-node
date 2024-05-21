const express = require('express');

const router = express.Router();

const auth = require('../middlewares/authMiddleware');

const { createOrder } = require('../controllers/orderController');

// Routes
router.post('/create', auth, createOrder);


module.exports = router;