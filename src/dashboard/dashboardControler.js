const express = require("express");
const router = express.Router();

// Dashboard controler routes
router.get("/", function(req, res) {
  res.render("dashboard/dashboard.ejs");
});

module.exports = router;
