const express = require("express");
const router = express.Router();
const wrapAsync = require("../util/wrapAsync.js");
const ExpressError = require("../util/ExpressError.js");
const Listing = require("../models/listing.js");
const listingController = require("../controller/listings.js");
const {isLoggedIn,isOwner,validateListing,validateReview} = require("../middleware.js");
//to parse form data (consisting file)
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
//the multer will store the file data in cloudinary instead of local (unlike previous case )
const upload = multer({ storage });

// index route
router.route("/new")
    .get(isLoggedIn,listingController.renderNewForm)
    .post(isLoggedIn,
        validateListing,
        upload.single("shiva[image]"),
        wrapAsync(listingController.createListing))

router.get("/",wrapAsync(listingController.index));

// edit route
router.get("/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderEditForm))

// this is dynamic keep it always down of similar with that
router.route("/:id")
    .get(wrapAsync(listingController.editListing))
    .put(isLoggedIn,
            isOwner,upload.single("shiva[image]"),
            validateListing,
            wrapAsync(listingController.updateListing))
    .delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing))

module.exports=router;