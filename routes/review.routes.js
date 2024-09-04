const express = require("express");
const Review = require("../models/Review.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");
const Business = require("../models/Business.model");
const router = express.Router();



// GET request for reviews with businessId
router.get("/businesses/:businessId/reviews", (req, res, next) => {
    const { businessId } = req.params;

    Review.find({business: businessId})
        .then((reviewsFromDB) => {
            res.status(200).json(reviewsFromDB)
            console.log("Succesfully found reviews with businessId!")
        })
        .catch((error) => {
            res.status(500).json({message: "uh oh..", error})
            console.log("uh oh.. failed fetching reviews with businessId: ", error)
          })
});


// POST request for review
router.post("/businesses/:businessId/reviews", isAuthenticated, (req, res, next) => {
    const { businessId } = req.params;
    const { title, text, rating, author, business } = req.body;
    const newReview = { title, text, rating, author, business }

    Review.create(newReview)
        .then((createdReviewFromDB) => {
            res.status(201).json(createdReviewFromDB)
            console.log("Succesfully created new review!");
            
        })
        .catch((error) => {
            res.status(500).json({message: "uh oh..", error})
            console.log("uh oh.. failed creating review: ", error)
          })
})

module.exports = router;