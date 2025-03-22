const express = require("express");
const CarbonData = require("../models/CarbonData");

const router = express.Router();

// Store Carbon Data
router.post("/carbon", async (req, res) => {
    const { userId, travel, food, energy } = req.body;
    const totalFootprint = travel + food + energy;

    const carbonData = new CarbonData({ userId, travel, food, energy, totalFootprint });
    await carbonData.save();

    res.status(201).json({ message: "Data Saved", carbonData });
});

module.exports = router;
