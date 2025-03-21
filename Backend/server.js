const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("GreenTrack API is Running 🚀");
});

// Import Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

const dataRoutes = require("./routes/dataRoutes");
app.use("/api/data", dataRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
