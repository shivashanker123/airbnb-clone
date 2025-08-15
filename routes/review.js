const express = require("express");
//mergeParams true is giving access to id present in the first part of the route
const router = express.Router({ mergeParams:true});
const wrapAsync = require("../util/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {validateListing,validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controller/reviews.js");

router.post("/",validateReview,wrapAsync(reviewController.createReview));

//Review delete
router.delete("/:reviewId",
    isLoggedIn,isReviewAuthor,
    wrapAsync(reviewController.destroyReview))

module.exports = router;