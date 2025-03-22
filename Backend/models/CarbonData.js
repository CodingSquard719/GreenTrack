const mongoose = require("mongoose");

const carbonDataSchema = mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        travel: Number,
        food: Number,
        energy: Number,
        totalFootprint: Number,
    },
    { timestamps: true }
);

module.exports = mongoose.model("CarbonData", carbonDataSchema);
