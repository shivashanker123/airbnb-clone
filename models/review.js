const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment:String,
    rating:{
        type:Number,
        min:1,
        max:5,
            },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    //this field to is to present the author name inside the review by populting(chain populating) from the user id
    author:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})
module.exports = mongoose.model("Review",reviewSchema);

