const jwt = require("jsonwebtoken");

const { Notesmodle } = require("../Modles/notes.modle");

const create = async (req, res) => {
  const { token } = req.query;
  const { Title, Note, Tags } = req.body;

  jwt.verify(token, process.env.JWTSECRETCODE, async function (err, decoded) {
    if (typeof decoded.email !== "string") {
      res.send("Invalid Token, Login Again");
    } else {
      const new_note = new Notesmodle({
        title: Title,
        note: Note,
        tags: Tags,
        email: decoded.email,
      });
      await Notesmodle.insertMany(new_note);
      res.send("data added Sucessfully");
    }
  });
};

const read = async (req, res) => {
  const { token } = req.query;
  jwt.verify(token, process.env.JWTSECRETCODE, async function (err, decoded) {
    if (typeof decoded.email !== "string") {
      res.send("Invalid Token, Login Again");
    } else {
      let data = await Notesmodle.find({ email: decoded.email });
      res.send(data);
    }
  });
};

const deleteIt = async (req, res) => {
  const { token } = req.query;

  const { Title } = req.body;
  jwt.verify(token, process.env.JWTSECRETCODE, async function (err, decoded) {
    if (typeof decoded.email !== "string") {
      res.send("Invalid Token, Login Again");
    } else {
      let data = await Notesmodle.deleteOne({
        $and: [{ email: decoded.email }, { title: Title }],
      });
      res.send("data deleted suseccfully");
    }
  });
};

module.exports = { create, read, deleteIt };
