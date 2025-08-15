const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const listSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        url:String,
        filename:String,
    },
    price:Number,
    location:String,
    country:String,
    reviews:[{
        type:Schema.Types.ObjectId,
        ref:"Review"
    }],
    // here we'll have the id of the created user (one of the doc from the user collection)
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    geometry:{
        type:{
            type:String,
            enum:['Point'],
            required:true
        },
        coordinates:{
            type:[Number],
            required:true
        }
    },
    // category:{
    //     type:String,
    //     enum:["mountains","arctics","farms","deserts"],
    // }
});
// to delete the reviews of a particular deleted listing
listSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({ _id:{$in: listing.reviews}})
    }
})
// making a class using the schema created
const Listing = mongoose.model("Listing",listSchema);
// export the class
module.exports=Listing;