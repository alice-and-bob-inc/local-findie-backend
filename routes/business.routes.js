const express = require("express");
const Business = require("../models/Business.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");
const router = express.Router();


// GET request for all businesses
router.get("/businesses", (req, res, next) => {

  Business.find({})
  .then((businessesFromDB) => {
    res.status(200).json(businessesFromDB)
    console.log("Succesfully found businesses!")
  })
  .catch((error) => {
    res.status(500).json({message: "uh oh..", error})
    console.log("uh oh.. failed finding businesses", error)
  })
});

// GET request for specific business
router.get("/businesses/:businessId", (req, res, next) => {
  const { businessId } = req.params;

  Business.findById(businessId)
    .then((businessFromDB) => {
      res.status(200).json(businessFromDB)
      console.log("Succesfully found single business!")
    })
    .catch((error) => {
      res.status(500).json({message: "uh oh..", error})
      console.log("uh oh.. failed finding business with specific id", error)
    })
});


// POST request for a new business
router.post("/businesses", isAuthenticated, (req, res, next) => {
  const { name, imageURL, description, location, category, foundedYear, openingHours } = req.body;
  const newBusiness = { name, imageURL, description, location, category, foundedYear, openingHours }

  Business.create(newBusiness)
    .then((createdBusinessFromDB) => {
      res.status(201).json(createdBusinessFromDB)
      console.log("Succesfully created business!")
    })
    .catch((error) => {
      res.status(500).json({message: "uh oh..", error})
      console.log("uh oh.. failed creating new business", error)
    })
});


// PUT request for updating a business
router.put("/businesses/:businessId", isAuthenticated, (req, res, next) => {
  const { name, imageURL, description, location, category, foundedYear, openingHours } = req.body;
  const updatedBusiness = { name, imageURL, description, location, category, foundedYear, openingHours }

  const { businessId } = req.params;

  Business.findOneAndUpdate({_id: businessId}, updatedBusiness, {new: true})
    .then((updatedBusinessFromDB) => {
      res.status(200).json(updatedBusinessFromDB)
      console.log("Succesfully updated business!")
    })
    .catch((error) => {
      res.status(500).json({message: "uh oh..", error})
      console.log("uh oh.. failed updating business", error)
    })
});


// DELETE request for specific business
router.delete("/businesses/:businessId", isAuthenticated, (req, res, next) => {
  const { businessId } = req.params;

  Business.deleteOne({_id: businessId})
    .then(() => {
      res.status(200).json({message: "Succesfuly deleted business"})
      console.log("Succesfully deleted business!")
    })
    .catch((error) => {
      res.status(500).json({message: "uh oh..", error})
      console.log("uh oh.. failed deleting business", error)
    })
});



module.exports = router;
