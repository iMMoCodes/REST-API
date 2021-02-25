const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

// MIDDLEWARE
app.use(bodyParser.json());

//IMPORT ROUTES
const postsRoute = require("./routes/posts");

// MIDDLEWARE
app.use("/posts", postsRoute);

//ROUTES
app.get("/", (req,res) => {
   res.send("We are on home");
});

//CONNECT TO DB
mongoose.connect(
   process.env.DB_CONNECTION,
   { useNewUrlParser: true },
   () => {
   console.log("connected to DB!")
});

//START LISTENING TO SERVER
app.listen(3000);