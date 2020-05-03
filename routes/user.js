const express = require("express");
const router = express.Router();
var passport = require("passport");

const userController = require("../controllers/user");
const userModel = require("../models/user");

// Register User
router.post("/register", function (req, res) {
  var password = req.body.password;
  var password2 = req.body.password2;

  if (password == password2) {
    var newUser = new userModel({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    });

    userController.createUser(newUser, function (err, user) {
      if (err) throw err;
      res.send(user).end();
    });
  } else {
    res.status(500).send('{erros: "Passwords don\'t match"}').end();
  }
});

router.get("/register/", (req, res) => {
  res.render("../views/user/register");
});

// Endpoint to login
router.post("/login", passport.authenticate("local"), function (req, res) {
  res.send(req.user);
});

router.get("/login/", (req, res) => {
  res.render("../views/user/login");
});

// Endpoint to get current user
router.get("/user", function (req, res) {
  console.log(req.user);
  res.send(req.user);
});

// Endpoint to logout
router.get("/logout", function (req, res) {
  req.logout();
  res.send(null);
});

module.exports = router;
