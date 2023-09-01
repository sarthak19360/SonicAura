
const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true },
        price: { type: Number, required: true },
        img: { type: String, },
    }
)

module.exports = mongoose.model('Product', ProductSchema);