const express = require("express");
const Router = express.Router();

Router.get("/productos", (req, res) =>{
  res.render("menu");
})


module.exports=Router;