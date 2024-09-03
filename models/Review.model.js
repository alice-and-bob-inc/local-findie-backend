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
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    business: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Business",
    },
})

const Review = model("Review", reviewSchema);
module.exports = Review;