const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/userController");
const { registerUserValidator } = require("../validators/userValidator");

// Register a new user
router.post("/register", registerUserValidator, registerUser);

module.exports = router;
