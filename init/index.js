const mongoose = require("mongoose");
const insertData = require("./data.js");
// (..):mean:->go one step back and see the models folders and enter into listing.js
const Listing = require("../models/listing.js");

main().then(()=>{
    console.log("connection successful");
})
.catch((err)=>{
    console.log("err found in your code");
})
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wonderlist')    
}
//dealing with the database
const func = async ()=>{
    await Listing.deleteMany({});
    insertData.data = insertData.data.map((obj)=>({...obj,owner:'6896fe27e7b446866d5121ce'}))
    await Listing.insertMany(insertData.data);
    console.log("data was initialising");
};

func();