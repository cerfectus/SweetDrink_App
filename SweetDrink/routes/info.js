const express = require('express');
const router  = express.Router();
const User = require("../models/User");

router.get("/aboutUs", (req, res)=>{
  const {user} = req;
  User.find()
  .then(()=>{
    res.render("aboutUs", {user});
  })
});

router.get("/contact", (req, res)=>{
  const {user} = req;
  User.find()
  .then(()=>{
    res.render("contact", {user});
  })
});

module.exports = router;