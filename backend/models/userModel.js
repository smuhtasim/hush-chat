const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  picture: {
    type: String,
    default:
      "https://icon-library.com/images/anonymous-icon/anonymous-icon-15.jpg",
  },
},
{
    timestamps: true
});

const User = mongoose.model("User", userModel)

module.exports = User
