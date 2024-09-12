const { Schema, model } = require("mongoose");

const businessSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    imageURL: String,
    websiteURL:{
        type: String,
        lowercase: true,
    },
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
    openingHours: { 
        type: Map,
        of: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

const Business = model("Business", businessSchema);
module.exports = Business;