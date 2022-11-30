const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { Usermodle } = require("../Modles/user.modle");

const signup = async (req, res) => {
  const { email, password } = req.body;

  const exists = await Usermodle.find({ email: email });

  if (exists.length > 0) {
    res.send("User already exists");
  } else {
    bcrypt.hash(password, 4, async function (err, hashed_password) {
      if (err) {
        res.send("Try again Later");
      }
      const new_user = new Usermodle({
        email: email,
        password: hashed_password,
      });
      await new_user.save();
      res.send("Signed Up successfully");
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const data = await Usermodle.findOne({ email: email });

  const check_password = data.password;

  bcrypt.compare(password, check_password, function (err, result) {
    if (result) {
      var token = jwt.sign({ email: email }, process.env.JWTSECRETCODE);
      res.send("Login Sucessful" + "token: " + token);
    } else {
      res.send("email or password doesn't match");
    }
  });
};

module.exports = { signup, login };
