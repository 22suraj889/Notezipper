const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/", (req, res) => {
  res.json(notes);
});

app.get("/api/:id", (req, res) => {
  const { id } = req.params;
});

const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(`Server started at PORT ${PORT}`));
