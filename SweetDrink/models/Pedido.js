const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pedidoSchema = new Schema({
  name: String,
  mail: String,
  pay: String,
  phone: Number,
  items: Array,
  total: Number
},
{
  timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
  }
});

module.exports = mongoose.model("Pedido", pedidoSchema);