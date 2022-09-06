const express = require('express');
const { getProducts, saveProduct, getProduct, deleteProduct, updateProduct } = require('../controllers/ProductController')
const {validatorCreateProduct, validatorGetProduct} = require("../validators/product");



const router = express.Router();
router.get('/product/:id', validatorGetProduct ,getProduct)
router.get('/product', getProducts)
router.post('/product', validatorCreateProduct,saveProduct)
router.delete('/product/:id', deleteProduct)
router.put('/product/:id', updateProduct)


module.exports = router