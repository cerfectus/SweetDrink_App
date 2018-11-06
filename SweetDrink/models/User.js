const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        required: "Debes mandar tu nombre",
    },
    email: {
        type: String,
        unique: "El email debe de unico",
        required: true
    },
    phone: {
      type: Number,
      required: true,
      unique: true
    },
    date: Date,
    password: String,
    confirmationCode: {
      type:String,
      unique: true
    },
    status: {type: String, enum: ["Confirmación pendiente", "Activo"],
    default: "Confirmación pendiente"
  },
    photo: {type: String, 
    default: "https://cdn.icon-icons.com/icons2/827/PNG/512/user_icon-icons.com_66546.pngs"
  }},
  {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

userSchema.plugin(passportLocalMongoose, {usernameField: "email"});

module.exports = mongoose.model("User", userSchema);