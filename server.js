require("dotenv").config();
const express = require("express");
const app = express();
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/build/login.html");
});

app.use(express.static("./build"));
app.listen(process.env.PORT || 3000);
