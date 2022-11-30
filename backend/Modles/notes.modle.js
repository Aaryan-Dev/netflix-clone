const mongoose = require("mongoose");

const notes_schema = new mongoose.Schema({
  title: String,
  note: String,
  tags: String,
  email: String,
});

const Notesmodle = mongoose.model("note", notes_schema);

module.exports = { Notesmodle };
