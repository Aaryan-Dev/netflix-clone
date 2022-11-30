const express = require("express");

const { signup, login } = require("../Controller/users.controller");

const usersrouter = express.Router();

usersrouter.post("/signup", signup);

usersrouter.post("/login", login);

module.exports = { usersrouter };
