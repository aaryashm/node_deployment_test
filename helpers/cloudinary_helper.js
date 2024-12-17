const { error } = require('console')
const cloudinary = require('../config/cloudinary')

const uploadToCloudinary = async (filePath)=>{
  try{

    const res = await cloudinary.uploader.upload(filePath)
    return {
      url: res.secure_url,
      publicId: res.public_id
    }

  }catch(e){
    console.log("Error while uploading", error)
    throw new Error('Error while uploading')
  }
}

module.exports = uploadToCloudinary