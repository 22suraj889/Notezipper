const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler} = require("./middlewares/errorMiddleware");

const app = express();
const connectDB = require("./config/db");

app.use(cors());
dotenv.config();
connectDB();
app.use(express.json());
app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/notes", (req, res) => {
  res.json(notes);
});

const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(`Server started at PORT ${PORT}`));
