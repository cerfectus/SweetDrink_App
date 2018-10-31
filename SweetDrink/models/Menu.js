const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema ({
  image: String,
  name : String,
  cantidad: String,
  precio: Number
},{
  timestamps: {
    createdAt: "createdAt",
    updatedAt: "updatedAt"
  }

});

module.exports = mongoose.model("Menu", menuSchema );

