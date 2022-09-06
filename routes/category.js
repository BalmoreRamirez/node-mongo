const express = require('express');
const {
    getCategories,
    saveCategory,
    getCategory,
    deleteCategory,
    updateCategory
} = require('../controllers/CategoryController')
const {validatorCreateCategory, validatorGetCategory} = require("../validators/category");

const router = express.Router();
router.get('/category/:id', validatorGetCategory, getCategory)
router.get('/category', getCategories)
router.post('/category', validatorCreateCategory, saveCategory)
router.delete('/category/:id', deleteCategory)
router.put('/category/:id', updateCategory)


module.exports = router