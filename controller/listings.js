const Listing = require("../models/listing.js");
// const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
// const mapToken = process.env.MAP_TOKEN;
// const geocodingClient = mbxGeocoding({  accessToken: mapToken });

const axios = require("axios");
const maptilerKey = "mx58JGcwyuMi90pdNHZF";

module.exports.index = async (req,res)=>{
    let allListing = await Listing.find({});
    // in the below parameter your have to send some ejs file inside views right now views->(listing->index.js)
    res.render("listing/index.ejs",{allListing});
}
module.exports.renderNewForm = (req,res)=>{
    res.render("listing/new.ejs");
}
module.exports.renderEditForm = async (req,res)=>{
    let {id} = req.params;
    let reqlist = await Listing.findById(id);

    if(!reqlist){
        req.flash("error","Listing you requested for does not exist");
        res.redirect("/listings");
    }else{
        let originalImageUrl = reqlist.image.url;
        console.log(originalImageUrl)
        originalImageUrl = originalImageUrl.replace("/upload","/upload/h_130,w_250");
        res.render("listing/edit.ejs",{reqlist,originalImageUrl});
    }
}
module.exports.editListing = async (req,res)=>{
    let {id} = req.params;
    let reqlist = await Listing.findById(id)
    .populate({path:"reviews"
        ,populate: {
            path:"author"
    }})
    .populate("owner");
    if(!reqlist){
        req.flash("error","Listing you requested for does not exist");
        res.redirect("/listings")
    }else{
        res.render("listing/show.ejs",{reqlist});
    }
}
module.exports.updateListing = async (req,res)=>{
    if(!req.body){
        throw new ExpressError(400,"Send valid data for listing");
    }
    
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id,req.body.shiva);
    // here while editing the form sometimes user wont upload new image in the case req.file'll be undefined so
    if(typeof req.file != "undefined"){
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url , filename }
    await listing.save()
    }

    req.flash("success","Listing updated")
    res.redirect(`/listings/${id}`);
}

module.exports.destroyListing = async (req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id)
    req.flash("success","Listing deleted");
    res.redirect(`/listings`);
}

module.exports.createListing = async (req,res,next)=>{

       try {

        // Forward geocoding request to MapTiler API
        const geoRes = await axios.get(
            `https://api.maptiler.com/geocoding/${encodeURIComponent(req.body.shiva.location)}.json?key=${maptilerKey}`
        );

        if (!geoRes.data.features || geoRes.data.features.length === 0) {
            req.flash("error", "Location not found. Please try again.");
            return res.redirect("/listings/new");
        }

        // Extract coordinates from response
        const [lng, lat] = geoRes.data.features[0].geometry.coordinates;
        console.log("Coordinates:", lng, lat);

        // Create the new listing object
        const url = req.file.path;
        const filename = req.file.filename;
        const newListing = new Listing(req.body.shiva);

        newListing.owner = req.user._id;
        newListing.image = { url, filename };

        // Required geometry field from your schema
        newListing.geometry = {
            type: "Point",
            coordinates: [lng, lat]
        };

        await newListing.save();

        req.flash("success", "New listing created");
        console.log(newListing);
        res.redirect("/listings");

    } catch (err) {
        console.error(err);
        next(err);
    }
}

module.exports.search = async (req,res,next)=>{
    const { query } = req.query; // from ?query=hotel
    let listings;
    if(query){
    listings = await Listing.find({
    $or: [
      { title: { $regex: query, $options: "i" } },   // search by title
      { location: { $regex: query, $options: "i" } }, // search by location
      { description: { $regex: query, $options: "i" } },
      { category: { $regex: query, $options: "i" } }  // search by category
    ]
  });}else{
    listings= await Listing.find({});
  }


  res.render("listing/index.ejs", { allListing: listings });

}
module.exports.searchByLocation = async (req, res) => {
    const { lng, lat, radius = 10 } = req.query; // default radius = 10km

    if (!lng || !lat) {
        req.flash("error", "Please provide a location to search!");
        return res.redirect("/listings");
    }

    const listings = await Listing.find({
        geometry: {
            $near: {
                $geometry: {
                    type: "Point",
                    coordinates: [parseFloat(lng), parseFloat(lat)]
                },
                $maxDistance: radius * 1000 // convert km → meters
            }
        }
    });

    res.render("listings/index", { allListing: listings });
};