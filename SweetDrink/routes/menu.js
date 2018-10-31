const express = require("express");
const Router = express.Router();
const Menu = require("../models/Menu");

Router.get("/productos", (req, res) =>{
  console.log("funciono")
  Menu.find()
  .then(r => {
    console.log(r)
    res.render("Menu",{r});
  })
 
})
Router.post("/productos", (req, res) => {
  
})


module.exports=Router;