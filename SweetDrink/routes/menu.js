const express = require('express');
const router  = express.Router();
const Producto = require('../models/Producto');

router.get("/productos", (req, res) =>{
  Producto.find({type: "Jugos"})
  .then(jugos=>{
    Producto.find({type: "Mezclador"})
  .then(mezclador=>{
    Producto.find({type: "Ginebra"})
  .then(ginebra=>{
    Producto.find({type: "Whiskey"})
  .then(whiskey=>{
    Producto.find({type: "Vodka"})
  .then(vodka=>{
    Producto.find({type: "Ron"})
    .then(ron=>{
      Producto.find({type: "Brandy"})
    .then(brandy=>{
      Producto.find({type: "Tequila"})
    .then(tequila=>{
      Producto.find({type: "Vino"})
    .then(vino=>{
      Producto.find({type: "cerveza"})
      .then(cerveza=>{
        res.render("menu", {cerveza, vino, tequila, brandy, ron, vodka, whiskey, ginebra, mezclador, jugos})
      });
    });
    });
    });
    });
  });
  });
  });
  });
  });
});

module.exports = router;