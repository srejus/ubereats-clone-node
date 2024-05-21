const express = require('express');
const auth = require("../middlewares/authMiddleware");

const {getProducts, createProduct,deleteProduct,updateProduct} = require('../controllers/productController');

const router = express.Router()

// routes
router.get("/:rest_id",getProducts);
router.get("/:rest_id/:id",getProducts);
router.post("/create/:rest_id",auth,createProduct);
router.delete("/delete/:id",auth, deleteProduct);
router.put('/update/:id',auth, updateProduct);


module.exports = router;