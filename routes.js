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
        user: {
          "uniqueId": req.user.id + "_" + req.user.nodeId,
          "displayName": req.user.displayName,
          "photos": req.user.photos
        },
      })
    : res.status(401).json({
        message: "Failed to authenticate",
      });
});

router.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["email", "profile"] })
);

router.get(
  "/auth/github/callback",
  passport.authenticate("github", {
    successRedirect: "/dashboard",
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

router.get("/dashboard", isLoggedIn, (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});
router.get("/login", (req, res) => {
  res.sendFile(__dirname + "/build/login.html");
});

module.exports = router;
