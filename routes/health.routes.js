const express = require("express");
const router = express.Router();
const Business = require("../models/Business.model");


router.get('/health', (req, res) => {

    //Send a request to the database to keep it alive (we will ignore the response)
    Business.find().then().catch()

    res.status(200).json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});


module.exports = router;