const express = require("express");
const router = express.Router();

// Dashboard controler routes
router.get("/", function(req, res) {
  res.render("dashboard/dashboard.ejs");
});

router.get("/profile", function(req, res) {
  res.render("dashboard/profile.ejs");
});

router.get("/speeches", function(req, res) {
  res.render("dashboard/speeches.ejs");
});
module.exports = router;
