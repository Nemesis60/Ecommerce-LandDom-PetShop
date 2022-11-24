const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true },
        price: { type: Number, required: true },
        imgs: [{ type: Array, required: true }],
        categories: { type: Array },
        Animal: {type: Array},
        inStock: { type: Boolean, default: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);