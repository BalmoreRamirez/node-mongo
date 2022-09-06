const {check} = require('express-validator')
const validateResults = require('../utils/handleValidator')


const validatorCreateProduct = [
    check("name").exists().notEmpty(),
    check("price").exists().notEmpty(),
    check("categoryId").exists().notEmpty().isMongoId(),
    check("description").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

const validatorGetProduct = [
    check("id").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

module.exports = {validatorCreateProduct, validatorGetProduct}