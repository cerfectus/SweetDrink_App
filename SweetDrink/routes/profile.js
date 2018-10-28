const express = require('express');
const router  = express.Router();
const commonMiddlewares = require("../helpers/commonMiddlewares");
const User = require("../models/User");

router.get("/", commonMiddlewares.isLoggedIn, (req, res) => {
  const {user} = req;
  User.find()
  .then(()=>{
    res.render("p_account", {user});
  })
});

router.get("/edit",commonMiddlewares.isLoggedIn, (req,res)=>{
  res.render("e_account");
});

module.exports = router;