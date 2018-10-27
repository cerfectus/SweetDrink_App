const express = require('express');
const router  = express.Router();

router.get("/aboutUs", (req, res)=>{
  res.render("aboutUs");
});

router.get("/contact", (req, res)=>{
  res.render("contact");
});

module.exports = router;