const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postRegister = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const user = await User.findOne({ email: email.toLowerCase() });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = new User({
      email: email.toLowerCase(),
      password: hash,
      username,
    });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id, email }, process.env.TOKEN_KEY, {
      expiresIn: "1d",
    });

    res.status(200).json({ msg: "User created", email: email, token: token });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = postRegister;
