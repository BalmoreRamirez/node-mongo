const productModel = require('../models/ProductModel')
const handleHttpError = require('../utils/handleError')
const {matchedData} = require("express-validator");



/**
 * get description product
 * @param {*} req 
 * @param {*} res 
 */
const getProduct = async (req, res) => {
    try {
        req = matchedData(req)
        const {id} = req
        // const {id} = req.params
        //const data = await productModel.findById({ _id: id })
        const data = await productModel.findOneData(id)
        res.send(data)
    } catch (error) {n
        handleHttpError(res, 'ERROR GET PRODUCT')
    }
}

/**
 * get Products
 * @param {*} req 
 * @param {*} res 
 */
const getProducts = async (req, res) => {

    try {
        const data = await productModel.findAllData({})
        res.send(data)
    } catch (error) {
        handleHttpError(res, 'ERROR GET PRODUCT')
    }

}

/**
 * Save product
 * @param {*} req 
 * @param {*} res 
 */
const saveProduct = async (req, res) => {
    try {
        //const body = req.body
        const body = matchedData(req)
        const data = await productModel.create(body)
        res.send(data)
    } catch (error) {
        handleHttpError(res, 'ERROR CREATE PRODUCT')
    }

}

/**
 * update product
 * @param {*} req 
 * @param {*} res 
 */
const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        const data = await productModel.findByIdAndDelete({ _id: id })
        res.send({data})
    } catch (error) {
        handleHttpError(res, 'ERROR DELETE PRODUCT')
    }

}

const updateProduct = async (req, res)=>{
    try {
        const id = req.params.id
        const body = req.body
        const data = await productModel.findByIdAndUpdate(
            id,
            body
        )
        res.json({
            message:'successfully updated product'
        })
    } catch (error) {
        handleHttpError(res, 'ERROR UPDATE PRODUCT')
    }

}


module.exports = { getProducts, saveProduct, getProduct, deleteProduct, updateProduct }