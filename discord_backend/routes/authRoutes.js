const express = require("express");
const router = express.Router();
const autControllers = require("../controllers/auth/authControllers");
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6).max(20),
});

const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6).max(20),
  username: Joi.string().required().min(4).max(12),
});

router.post(
  "/register",
  validator.body(registerSchema),
  autControllers.controllers.postRegister
);

router.get(
  "/login",
  validator.body(loginSchema),
  autControllers.controllers.postLogin
);

module.exports = router;
