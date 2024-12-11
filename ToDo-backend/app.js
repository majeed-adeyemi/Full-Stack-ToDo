const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoute");
const router = require("./routes/todoRoute");

dotenv.config();

const app = express();

const PORT = process.env.PORT;

connectDB();

app.use(bodyParser.json());

app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});