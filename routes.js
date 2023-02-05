const router = require("express").Router();
const passport = require("passport");

function isLoggedIn(req, res, next) {
  req.user ? next() : res.redirect("/login");
}

router.get("/auth/login/success", (req, res) => {
  req.user
    ? res.status(200).json({
        success: true,
        message: "Successfully authenticated",
        user: req.user,
      })
    : res.status(401).json({
        message: "Failed to authenticate",
      });
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/auth/failure",
  })
);

router.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["email", "profile"] })
);

router.get(
  "/auth/github/callback",
  passport.authenticate("github", {
    successRedirect: "/protected",
    failureRedirect: "/auth/failure",
  })
);

router.get("/auth/failure", (req, res) => {
  res.send("Something went wrong...");
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

router.get("/", isLoggedIn, (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});
router.get("/protected", isLoggedIn, (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});
router.get("/login", (req, res) => {
  res.sendFile(__dirname + "/build/login.html");
});

module.exports = router;
