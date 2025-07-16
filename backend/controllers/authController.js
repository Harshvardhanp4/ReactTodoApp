const User = require("../models/user");
const { signToken } = require("../utils/jwtUtils");
const bcrypt = require("bcryptjs");

async function signup(req, res) {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({
        msg: "User already exists/taken!"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      password: hashedPassword
    });

    const token = signToken({ userId: newUser._id });

    res.status(201).json({
      msg: "Signup successful!",
      token
    });
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({
      msg: "Something went wrong!"
    });
  }
}

async function login(req, res) {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    const token = signToken({ userId: user._id });

    res.json({
      msg: "Login successful!",
      token
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      msg: "Something went wrong!"
    });
  }
}

module.exports = {
  signup,
  login
};
