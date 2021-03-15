const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express);

// Import routers
const dashboardRoutes = require("./dashboard/dashboardControler");
const userRouters = require("./user/userControler");
//Use imported routes
app.use("/dashboard", dashboardRoutes);
app.use("/user", userRouters);
app.get("/", function(req, res) {
  res.render("landing.ejs");
});

app.listen(port, function() {
  console.log("server is on");
});
