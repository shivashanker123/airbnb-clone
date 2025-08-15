//a image/video storage service 
const cloudinary = require("cloudinary").v2;
// to send files directly to cloudinary instead of storing them locally
const { CloudinaryStorage } = require("multer-storage-cloudinary");
// configur=(linking)// we are linking backend to cloud for that we have to enter the credentials of cloud
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET,
})

//we created our account in cloudinary but we have to set a location in cloudinary to store out files
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'wanderlust_DEV',
    allowedformat:["png","jpg","jpeg"], // supports promises as well
  },
});

//export the cloudinary and storage from this cloudConfig.js file
module.exports = {
    cloudinary,storage
}
 