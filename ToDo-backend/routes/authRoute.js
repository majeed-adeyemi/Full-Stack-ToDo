const { registerUser, loginUser } = require("../controllers/AuthController");
const express = require("express");
const router = express.Router();

// User registration
router.post("/register", registerUser);

// User login
router.post("/login", loginUser);

module.exports = router;