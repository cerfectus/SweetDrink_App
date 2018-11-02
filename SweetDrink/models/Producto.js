const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productoSchema = new Schema({
  image: String,
  name: String,
  type: String,
  Qty: String,
  price: Number
},
{
  timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
  }
});


module.exports = mongoose.model("Producto", productoSchema);