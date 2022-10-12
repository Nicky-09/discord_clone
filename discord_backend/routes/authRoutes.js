const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  console.log(req.body);
  res.send("register");
});

router.post("/login", (req, res) => {
  console.log(req.body);
  res.send("login");
});

module.exports = router;
