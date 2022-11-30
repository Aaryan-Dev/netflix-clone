const express = require("express");

const { create, read, deleteIt } = require("../Controller/notes.controller");

const notesrouter = express.Router();

notesrouter.post("/create", create);

notesrouter.get("/read", read);

notesrouter.post("/delete", deleteIt);

module.exports = { notesrouter };
