const mongoose = require('mongoose');

const CategoryScheme = new mongoose.Schema(
    {
        name: {
            type: String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)


module.exports = mongoose.model('category', CategoryScheme)