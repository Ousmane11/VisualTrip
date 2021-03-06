require("dotenv").config();
const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require('bcrypt')
const bcryptSalt = 10
const Amadeus = require('amadeus')
const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET
});

// amadeus.referenceData.urls.checkinLinks
//   .get({
//     airlineCode: "BA"
//   })
//   .then(function(response) {
//     console.log(response.body); //=> The raw body
//     console.log(response.result); //=> The fully parsed result
//     console.log(response.data); //=> The data attribute taken from the result
//   })
//   .catch(function(error) {
//     console.log(error.response); //=> The response object with (un)parsed data
//     console.log(error.response.request); //=> The details of the request made
//     console.log(error.code); //=> A unique error code to identify the type of error
//   });

router.get("/login", (req, res, next) => {
  res.render("auth/login", { message: req.flash("error") });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
    failureFlash: true,
    passReqToCallback: true
  })
);

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post('/signup', (req, res, next) => {
  const username = req.body.username
  const password = req.body.password
  const localization = req.body.localization
  if (username === '' || password === '') {
    res.render('auth/signup', { message: 'Indicate username and password' })
    return
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", { message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      localization
    })

    newUser
      .save()
      .then(() => {
        res.redirect("/");
      })
      .catch(err => {
        res.render("auth/signup", { message: "Something went wrong" });
      });
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
