const cloudinary = require('cloudinary').v2;
require("dotenv").config();


// cloudinary.config({
//     secure: true
// })

// CHATGPT

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
  
});
console.log(process.env.CLOUDINARY_API_SECRET)

module.exports = cloudinary;
