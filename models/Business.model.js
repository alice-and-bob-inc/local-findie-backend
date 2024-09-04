const { Schema, model } = require("mongoose");

const businessSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    imageURL: String,
    description: String,
    location:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
        enum: ["restaurant", "bookstore", "coffeeshop", "arcade", "fair"],
    },
    foundedYear: Number,
    openingHours: [String],
})

const Business = model("Business", businessSchema);
module.exports = Business;