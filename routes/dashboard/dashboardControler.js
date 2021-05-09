const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../../config/auth');
var Speech = require("../../models/Speech");
// Welcome Page
// router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/', ensureAuthenticated, (req, res) =>
  res.render('dashboard/dashboard', {
    user: req.user
  })
);
router.get('/speeches', ensureAuthenticated, (req, res) =>
  Speech.find({UserID:req.user.id},function(err, allSpeech){
    if(err){
      console.log(err);
    }else{
      res.render('dashboard/speeches', {user: req.user,allSpeech:allSpeech});
      // console.log(allSpeech);
    }
  }));

router.post('/speech',ensureAuthenticated,(req, res)=>{
  // console.log("Data from post method");
  // alert("post req");
  var user=req.user.id;
  var title = req.body.title;
  var speech=req.body.speech;
  var newSpeech={UserID: user,Speechname: title,Speech:speech};
  Speech.create(newSpeech,function(err,newlyCreated){
    if(err){
      console.log(err);
    }else{
      res.redirect("/dashboard");
    }
  })
  
});
router.post('/delspeech',ensureAuthenticated,(req, res)=>{
  var delSpeech = req.body.delSpeech;
  Speech.findOneAndDelete({_id:delSpeech},function(err,docs){
    if (err){
      console.log(err)
  }
  else{
      console.log("Deleted User : ", docs);
      res.redirect("/dashboard/speeches")
  }
  })
  
});
router.get('/editspeech', ensureAuthenticated, (req, res) =>{
  var _id=req.query.editspeech;
  Speech.findById(_id, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.render('dashboard/editspeech', {user: req.user, speech:result})
    }
  });
}
);
router.get('/signlanguage', ensureAuthenticated, (req, res) =>{
  var _id=req.query.signlanguage;
  Speech.findById(_id, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.render('dashboard/signlanguage', {user: req.user, speech:result})
    }
  });
}
);
router.post('/updatespeech', ensureAuthenticated, (req, res) =>{

  id= req.body.id;
  speechname=req.body.Speechname;
  speech=req.body.speech;
  console.log(id+"\n"+speechname+"\n"+speech);
  Speech.findByIdAndUpdate(id, {Speechname:speechname, Speech:speech },function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Updated User : ", docs);
        res.redirect("/dashboard/speeches");
    }
});
}
);
router.get('/profile', ensureAuthenticated, (req, res) =>
  res.render('dashboard/profile', {
    user: req.user
  })
);

module.exports = router;
