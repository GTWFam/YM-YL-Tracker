require("dotenv").config();
const process = require('process');
console.log(process.pid);
const express = require("express");
const app = express();
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");
require("https").globalAgent.options.rejectUnauthorized = false;
const passport = require("passport");
const mgdata = require('./data');
const routes = require("./routes");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;

app.use(express.json());
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(passport.initialize());
app.use(passport.session()); 

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/github/callback",
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
}); 

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get("/", (req, res) => {
  res.redirect("/dashboard");
});

app.use(express.static("build"));
app.use("/", routes);
app.use("/", mgdata);

app.listen(process.env.PORT || 3000);
