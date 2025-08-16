if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}


const express = require("express");
const app = express();

const listingRoute = require("./routes/listing.js");
const reviewRoute = require("./routes/review.js");
const userRoute = require("./routes/user.js");

const session = require("express-session");
const MongoStore = require('connect-mongo');

const flash = require("connect-flash");
// requiring related to authentication
const passport = require("passport");
const LocalStrategy = require("passport-local");



const mongoose = require("mongoose");
const path = require("path");
// ejs mate
engine = require('ejs-mate');
app.engine("ejs",engine);

let methodOverride = require("method-override");
app.use(methodOverride("_method"));

//models
const User = require("./models/user.js")
const Review = require("./models/review.js");
const Listing = require("./models/listing.js");

const { count } = require("console");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


const dbUrl = process.env.ATLASDB_URL

main().then(()=>{
    console.log("connection successful");
})
.catch((err)=>{
    console.log("err found in your code");
})

async function main() {
    //this time it connects to atlas db se connect karega instead of localmachine
    await mongoose.connect(dbUrl)    
}
//storing session related information in mongo store
const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET
    },
    touchAfter:24*3600,
})
store.on("error",()=>{
    console.log("error in mongo store",err);
})

const sessionOptions = { 
    store:store,
    secret : process.env.SECRET,
    resave:false ,
    saveUniniatialized:true,
    cookie: {
        // date always in millisecond
        expires: Date.now()+7*24*60*60*1000,
        maxAge : 7*24*60*60*1000,
        httpOnly : true
    } };
// passport will also use this session
app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})

app.use("/listings",listingRoute);
app.use("/listings/:id/review",reviewRoute);
app.use("/",userRoute);

app.use((err,req,res,next)=>{
    let {statusCode=500,message="Internal server error"}=err;
    res.status(statusCode).render("listing/error.ejs",{message});
});

app.listen(8080,()=>{
    console.log("server is listening on port 8080");
})