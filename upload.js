// var cloudinary = require('cloudinary').v2;

// require('dotenv').config();

// cloudinary.config({ 
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_KEY, 
//     api_secret: process.env.API_SECRET 
//   });


var cloud = require('./utils/cloudinary');
//Image Upload

let uploadImage = (_cloudinary, image_uri, friendly_name) => {
    _cloudinary.uploader.upload(image_uri, {public_id:friendly_name},
        (error, result) => { console.log(result, error) });
}

uploadImage(cloud, "images/nodejs.png", "john");