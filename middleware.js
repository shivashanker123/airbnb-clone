const Listing = require("./models/listing.js");
const Review = require("./models/review.js");

const { Listingschema,reviewSchema } = require("./schema.js");
const ExpressError = require("./util/ExpressError.js");

module.exports.isLoggedIn = (req,res,next)=>{
    // the user wanting url is present in req.originalUrl
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","you must be logged in to create listing");
       return res.redirect("/login");
    }
    next();
}
module.exports.saveRedirectUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}
module.exports.isOwner = async (req,res,next)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner.equals(req.user._id)){
        req.flash("error","You are not the owner of this listing");
        return res.redirect(`/listings/${id}`);
    };
    next();
}
module.exports.validateListing = (req,res,next)=>{
    const {error} = Listingschema.validate(req.body);
    if(error){
        throw new ExpressError(404,error.message);
    }else{
        next();
    }
}
module.exports.validateReview = (req,res,next)=>{
    const {error} = reviewSchema.validate(req.body);
    if(error){
        throw new ExpressError(404,error.message);
    }else{
        next();
    }
}
module.exports.isReviewAuthor = async (req,res,next)=>{
    let {id,reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author.equals(req.user._id)){
        req.flash("error","You are not the author of this review");
        return res.redirect(`/listings/${id}`);
    };
    next();
}