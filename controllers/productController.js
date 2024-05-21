const Product = require('../models/productModel');
const mongoose = require('mongoose');



const getProducts = async(req,res) => {
    try{
        const {rest_id,id} = req.params;
        const restId = new mongoose.Types.ObjectId(rest_id);
        const products = await Product.find({restaurant_id:restId});
        if(products) {
            if(id) {
                const product = await Product.findById(id);
                return res.status(200).json(product);
            }
            return res.status(200).json(products);
        }
        res.status(404).json({error:"No products found"})
    } catch(err) {
        res.status(400).json({error:err.message});
    }
}

const createProduct = async(req,res) => {
    try{
        const {rest_id} = req.params;
        const product = await Product.create(
            {
                item_name:req.body.item_name,
                quantity:req.body.quantity,
                price:req.body.price,
                restaurant_id:rest_id
            }
        )
        if(product) {
            return res.status(201).json(product);
        }
        res.status(400).json({error:"Something went wrong!"});
    } catch(err) {
        res.status(400).json({error:err.message});
    }
}


const updateProduct = async(req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if(product) {
            return res.status(200).json({message:"Item updated successfully!"});
        }
        res.status(400).json({error:"Something went wrong!"});
    } catch(err) {
        res.status(400).json({error:err.message});
    }
}


const deleteProduct = async(req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        res.status(200).json({message:"Item deleted Successfully!"});
    } catch(err) {
        res.status(400).json({error:err.message});
    }
}


module.exports = {
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct
}