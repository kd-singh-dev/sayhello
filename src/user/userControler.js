const express = require("express");
const router = express.Router();

// Dashboard controler routes
router.get("/login", function(req, res) {
  res.render("user/login.ejs");
});

router.get("/register", function(req, res) {
  res.render("user/register.ejs");
});

module.exports = router;
