var cloudinary = require('./cloudinary');

//Image Upload
let uploadImage = (image_uri, folder, public_id) => {
        cloudinary.uploader.upload(image_uri, { folder, public_id },
                (error, result) => { console.log(result, error) });
}

let uploadVideo = (video_uri, folder, public_id) => {
        //Uploading large videos a chunk at a time (5MB)
        //cloudinary.uploader.upload_large(video_uri, { resource_type: "video" , chunk_size: 5000000}, function (error, result) { console.log(result, error); });
        cloudinary.uploader.upload(video_uri, { resource_type: "video", folder, public_id}, function (error, result) { console.log(result, error); });
 
}
module.exports = { uploadImage, uploadVideo };