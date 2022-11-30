const express = require("express");
const { connection } = require("./Config/db");

const app = express();
app.use(express.json());

require("dotenv").config();

const { notesrouter } = require("./Routers/notes.router");
const { usersrouter } = require("./Routers/user.router");

const field = (req, res, next) => {
  if (req.url[7] === "c") {
    const { Title, Note, Tags } = req.body;

    if (
      Title == "" ||
      Note == "" ||
      Tags == "" ||
      Title == undefined ||
      Note == undefined ||
      Tags == undefined
    ) {
      res.send("Enter all fields");
    } else {
      next();
    }
  } else {
    next();
  }
};

app.get("/", (req, res) => {
  res.send("Hell");
});

app.use(field);
app.use("/notes", notesrouter);
app.use("/user", usersrouter);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Active");
  } catch (err) {
    console.log(err);
  }
  console.log("listening on 8080");
});
