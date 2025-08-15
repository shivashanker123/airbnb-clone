const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../util/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const usercontroller = require("../controller/users.js");

router.route("/signup")
    .get(usercontroller.renderSignupForm)
    .post(wrapAsync(usercontroller.signup))

router.route("/login")
    .get(usercontroller.renderLoginForm)
    .post(saveRedirectUrl,
        //it is a passport middleware
        //first parameter in authentication is local,{second prm is an object having redirect,flash}
        passport.authenticate("local",{
            failureRedirect:"/login",
            failureFlash:true
        }),(usercontroller.login));

router.get("/logout",usercontroller.logout);

module.exports = router;