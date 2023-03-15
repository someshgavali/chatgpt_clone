const express = require("express");
const {
  registerController,
  loginController,
  logoutController,
} = require("../controllers/authController");

// route object=>
const router = express.Router();

// routes=>
router.post("/register", registerController);

// login=>
router.post("/login", loginController);

// logout=>
router.post("/logout", logoutController);

module.exports = router;
