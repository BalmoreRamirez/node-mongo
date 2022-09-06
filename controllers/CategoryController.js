const categoryModel = require('../models/CategoryModel')
const handleHttpError = require('../utils/handleError')
const {matchedData} = require("express-validator");

/**
 * get description category
 * @param {*} req
 * @param {*} res
 */
const getCategory = async (req, res) => {
    try {
        req = matchedData(req)
        const {id} =req
        //const id = req.params.id
        const data = await categoryModel.findById({_id: id})
        res.send(data)
    } catch (error) {
        handleHttpError(res, 'ERROR GET PRODUCT')
    }
}

/**
 * get categories
 * @param {*} req
 * @param {*} res
 */
const getCategories = async (req, res) => {

    try {
        const data = await categoryModel.find({})
        res.send(data)
    } catch (error) {
        handleHttpError(res, 'ERROR GET PRODUCT')
    }

}

/**
 * Save category
 * @param {*} req
 * @param {*} res
 */
const saveCategory = async (req, res) => {
    try {
        //const body = req.body
        const body = matchedData(req)
        const data = await categoryModel.create(body)
        res.send(data)
    } catch (error) {
        handleHttpError(res, 'ERROR CREATE PRODUCT')
    }

}

/**
 * update category
 * @param {*} req
 * @param {*} res
 */
const deleteCategory = async (req, res) => {
    try {
        const id = req.params.id
        const data = await categoryModel.findByIdAndDelete({_id: id})
        res.send({data})
    } catch (error) {
        handleHttpError(res, 'ERROR DELETE PRODUCT')
    }

}

const updateCategory = async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const data = await categoryModel.findByIdAndUpdate(
            id,
            body
        )
        res.json({
            message: 'successfully updated product'
        })
    } catch (error) {
        handleHttpError(res, 'ERROR UPDATE PRODUCT')
    }

}


module.exports = {getCategories, saveCategory, getCategory, deleteCategory, updateCategory}