const User = require("../models/user.js");

module.exports.renderSignupForm = (req,res)=>{
    res.render("users/signup.ejs");
}
module.exports.signup = async (req,res)=>{
    try{
    let {username,email,password} = req.body;
    let user = new User({email,username});
    let registedUser = await User.register(user,password);
    //auto login after signup
    //second parameter is same as in case of logout
    req.login(registedUser,(err)=>{
            if(err){
                next(err);
            }
            req.flash("success","Welcome to Wanderlust!");
            res.redirect("/listings");
    });
    }catch(err){
        req.flash("error",err.message);
        res.redirect("/signup");
    }
}
module.exports.renderLoginForm = (req,res)=>{
    res.render("users/login.ejs");
}

module.exports.login = async (req,res)=>{
        //we dont want to redirect to listing always for that we should know the redirectUrl
        req.flash("success","Welcome back to Wanderlust");
        let redirect = res.locals.redirectUrl || "/listings";
        res.redirect(redirect);
}
module.exports.logout = (req,res)=>{
    req.logOut((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","logged you out!");
        res.redirect("/listings");
    })
}