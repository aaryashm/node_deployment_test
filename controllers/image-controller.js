const uploadToCloudinary = require('../helpers/cloudinary_helper')
const Image = require('../models/Image')
const fs = require('fs')
const cloudinary = require('../config/cloudinary')

const uploadImageController = async(req, res)=>{
  try{
    if(!req.file){
      return res.status(400).json({
        success: false,
        message: "File is required."
      })
    }

    const {url, publicId} = await uploadToCloudinary(req.file.path)
    const newImage = new Image({
      url,
      publicId,
      uploadedBy: req.userInfo.userId
    })

    await newImage.save()
    //delete file
    fs.unlinkSync(req.file.path)

    res.status(200).json({
      success: true,
      message: "Image upload Successful",
      image: newImage
    })
  
    
  }catch(e){
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again."
    })
  }
}


const fetchImage = async(req, res)=>{
  try{
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 5
    const skip = (page-1) * limit
    const sortBy = req.query.sortBy || 'createdAt'
    const sortOrder = req.query.sortOrder === 'asc' ? 1: -1
    const totalImages = await Image.countDocuments()
    const totalPages = Math.ceil(totalImages/limit)
    const sortObj = {}
    sortObj[sortBy] = sortOrder

    const images = await Image.find({}).sort(sortObj).skip(skip).limit(limit)

    res.status(200).json({
      success: true,
      data: images,
      totalPages: totalPages,
      currentPage: page,
      totalImages: totalImages
    })
  
    
  }catch(e){
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again."
    })
  }
}

const deleteImage = async(req, res)=>{
  try{

    const imageIdToBeDeleted = req.params.id
    const userId = req.userInfo.userId

    const image = await Image.findById(imageIdToBeDeleted)
    if(!image){
      return res.status(404).json({
        success: false,
        message: "Image not found"
      })
    }
    if(image.uploadedBy.toString() !== userId){
      return res.status(403).json({
        success: false,
        message: "You are not authorized to delete this image."
      })
    }
    //delete from cloudinary
    await cloudinary.uploader.destroy(image.publicId)

    //delete image from db
    await Image.findByIdAndDelete(imageIdToBeDeleted)

    res.status(200).json({
      success: true,
      message: "Image deleted successfully"
    })
  
    
  }catch(e){
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again."
    })
  }
}


module.exports = {
  uploadImageController,
  fetchImage,
  deleteImage
}