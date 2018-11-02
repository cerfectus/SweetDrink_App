const express = require('express');
const router  = express.Router();
const Producto = require('../models/Producto');

router.get("/productos", (req, res) =>{
  Producto.find({type: "Tequila"})
  .then(tequila=>{
    Producto.find({type: "Vino"})
  .then(vino=>{
    console.log(vino)
    Producto.find({type: "cerveza"})
    .then(cerveza=>{
      res.render("menu", {cerveza, vino, tequila})
    })
  })
  })
});

module.exports = router;