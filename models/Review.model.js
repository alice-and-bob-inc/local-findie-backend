const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    business: {
        type: Schema.Types.ObjectId,
        ref: "Business",
        required: true
    },
})

const Review = model("Review", reviewSchema);
module.exports = Review;