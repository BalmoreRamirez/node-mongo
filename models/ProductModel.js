const mongoose = require('mongoose');

const ProductScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        price: {
            type: Number
        },
        categoryId: {
            type: mongoose.Types.ObjectId
        },
        description: {
            type: String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

// Join full data
ProductScheme.statics.findAllData = function (name) {
    const joinData = this.aggregate([
        {
            $lookup: {
                from: "categories",
                localField: "categoryId",
                foreignField: "_id",
                as: "product"
            }
        },
        {
            $unwind:"$product"
        }
    ])
    return joinData

};

// join one data
ProductScheme.statics.findOneData = function (id) {
    const joinData = this.aggregate([
        {
            $match:{
                _id:mongoose.Types.ObjectId(id)
            }
        },
        {
            $lookup: {
                from: "categories",
                localField: "categoryId",
                foreignField: "_id",
                as: "product"
            }
        },
        {
            $unwind:"$product"
        }
    ])
    return joinData

};
module.exports = mongoose.model('product', ProductScheme)