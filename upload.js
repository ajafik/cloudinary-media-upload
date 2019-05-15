var cloud = require('./utils/cloudinary');
//Image Upload

let uploadImage = (_cloudinary, image_uri, folder, public_id) => {
    _cloudinary.uploader.upload(image_uri, {folder, public_id },
        (error, result) => { console.log(result, error) });
}

uploadImage(cloud, "images/nodejs.png", 'profile_pix', "sade");