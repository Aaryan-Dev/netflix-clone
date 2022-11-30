const mongoose = require("mongoose");

// .env starts ---
require("dotenv").config();
const password = process.env.PASSWORD;
// ends ---
console.log(password);
const connection = mongoose.connect(
  `mongodb+srv://nobody:${password}@cluster0.f81kos6.mongodb.net/eval3`
);

module.exports = {
  connection,
};
