const mongoose = require("mongoose");

const user_schema = new mongoose.Schema({
  //   email: { type: String, required: true },
  //   password: { type: String, required: true },
  email: String,
  password: String,
});

const Usermodle = mongoose.model("user", user_schema);

module.exports = { Usermodle };
