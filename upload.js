var cloudinary = require('cloudinary').v2;

require('dotenv').config();

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET 
  });

//Image Upload

let uploadImage = (_cloudinary)=>{
    _cloudinary.uploader.upload("images/nodejs.png",
    function (error, result) { console.log(result, error) });
}

uploadImage(cloudinary);