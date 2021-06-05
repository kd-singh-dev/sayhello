const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const {
  ensureAuthenticated,
  forwardAuthenticated,
} = require("../../config/auth");
var Speech = require("../../models/Speech");
var User = require("../../models/User");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

//MULTER

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: "./public/images/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Init Upload
const upload = multer({
  storage: storage,
}).single("ProfilePic");
// Dashboard
router.get("/", ensureAuthenticated, (req, res) =>
  res.render("dashboard/dashboard", {
    user: req.user,
  })
);
router.get("/speeches", ensureAuthenticated, (req, res) =>
  Speech.find({ UserID: req.user.id }, function (err, allSpeech) {
    if (err) {
      console.log(err);
    } else {
      res.render("dashboard/speeches", {
        user: req.user,
        allSpeech: allSpeech,
      });
    }
  })
);

router.post("/speech", ensureAuthenticated, (req, res) => {
  var title = req.body.title;
  var speech = req.body.speech;
  var newSpeech = { UserID: req.user._id, Speechname: title, Speech: speech };
  Speech.create(newSpeech, function (err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/dashboard");
    }
  });
});
router.post("/delspeech", ensureAuthenticated, (req, res) => {
  var delSpeech = req.body.delSpeech;
  Speech.findOneAndDelete({ _id: delSpeech }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/dashboard/speeches");
    }
  });
});
router.get("/editspeech", ensureAuthenticated, (req, res) => {
  var _id = req.query.editspeech;
  Speech.findById(_id, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.render("dashboard/editspeech", { user: req.user, speech: result });
    }
  });
});
router.get("/signlanguage", ensureAuthenticated, (req, res) => {
  var _id = req.query.signlanguage;
  Speech.findById(_id, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.render("dashboard/signlanguage", { user: req.user, speech: result });
    }
  });
});
router.post("/updatespeech", ensureAuthenticated, (req, res) => {
  id = req.body.id;
  speechname = req.body.Speechname;
  speech = req.body.speech;
  Speech.findByIdAndUpdate(
    id,
    { Speechname: speechname, Speech: speech },
    function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/dashboard/speeches");
      }
    }
  );
});
router.get("/profile", ensureAuthenticated, (req, res) => {
  Speech.count({ UserID: req.user._id }, function (err, Totalcon) {
    if (err) {
      console.log(err);
    } else {
      User.findOneAndUpdate(
        { _id: req.user._id },
        { $inc: { PageView: 1 } },
        { new: true },
        function (err, response) {
          if (err) {
            console.log(err);
          } else {
            res.render("dashboard/profile", {
              user: req.user,
              Totalcon: Totalcon,
            });
          }
        }
      );
    }
  });
});

router.post("/updateprofilepic", ensureAuthenticated, (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
      request.redirect("/dashboard/profile");
    } else {
      var path = "/images/" + req.file.filename;
      // Delete the Previous file
      var previouspath = "./public" + req.user.ProfilePic;
      fs.unlink(previouspath, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Prevoius file deleated");
        }
      });
      User.findByIdAndUpdate(
        req.user.id,
        { ProfilePic: path },
        function (err, docs) {
          if (err) {
            console.log(err);
          } else {
            res.redirect("/dashboard/profile");
          }
        }
      );
    }
  });
});

router.post("/updateprofile", ensureAuthenticated, (req, res) => {
  var name = req.body.username;
  User.findByIdAndUpdate(req.user._id, { name: name }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/dashboard/profile");
    }
  });
});

module.exports = router;
