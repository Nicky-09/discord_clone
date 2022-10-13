const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    const token = jwt.sign({ id: newUser._id, email }, process.env.TOKEN_KEY, {
      expiresIn: "1d",
    });

    res.status(200).json({ msg: "User logged in", email: email, token: token });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = postLogin;
