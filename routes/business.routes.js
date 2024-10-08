const express = require("express");
const Business = require("../models/Business.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");
const router = express.Router();
const fileUploader = require("../config/cloudinary.config");


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

// GET request for specific business based on businessId
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

// GET request for specific business based on userId
router.get("/businesses/user/:userId", (req, res, next) => {
  const { userId } = req.params;

  Business.find({user: userId})
    .then((businessFromDB) => {
      res.status(200).json(businessFromDB)
      console.log("Succesfully found businesses with userId!")
    })
    .catch((error) => {
      res.status(500).json({message: "uh oh..", error})
      console.log("uh oh.. failed finding business with specific id", error)
    })
});


// POST request for a new business
router.post("/businesses", isAuthenticated, (req, res, next) => {
  const { name, imageURL, description, location, category, foundedYear, websiteURL, openingHours, user } = req.body;
  const newBusiness = { name, imageURL, description, location, category, foundedYear, websiteURL, openingHours, user }

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
  const { name, imageURL, description, location, category, foundedYear, websiteURL, openingHours, user } = req.body;
  const updatedBusiness = { name, imageURL, description, location, category, foundedYear, websiteURL, openingHours, user }

  const { businessId } = req.params;

  Business.findOneAndUpdate({_id: businessId}, updatedBusiness, {new: true})
    .then((updatedBusinessFromDB) => {
      res.status(200).json(updatedBusinessFromDB)
      console.log("Successfully updated business!")
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
      res.status(200).json({message: "Succesfully deleted business"})
      console.log("Succesfully deleted business!")
    })
    .catch((error) => {
      res.status(500).json({message: "uh oh..", error})
      console.log("uh oh.. failed deleting business", error)
    })
});

// POST request for image upload /api/upload
router.post("/upload", fileUploader.single("imageURL"), (req, res, next) => {
  if(!req.file){
    next(new Error("No file uploaded"));
    return;
  }
  res.json({ fileURL: req.file.path });
});



module.exports = router;
