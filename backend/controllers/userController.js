const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the field");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    throw new Error("This email is already used");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    console.log(generateToken(user._id));
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.picture,
      token: generateToken(user._id),
    });
  }
});

module.exports = { registerUser };
