const express = require('express');
const router  = express.Router();
const commonMiddlewares = require("../helpers/commonMiddlewares");

router.get("/", commonMiddlewares.isLoggedIn,(req, res) => {
  res.render("p_account");
});

module.exports = router;