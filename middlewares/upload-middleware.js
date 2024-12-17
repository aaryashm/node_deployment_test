

const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, 'uploads/')
  },
  filename: function(req, file, cb){
    cb(null, file.fieldname + '-'+ Date.now() + path.extname(file.originalname))
  }
});

//file filter function
const checkFileFilters = (req, file, cb)=>{
  if(file.mimetype.startsWith('image')){
    cb(null, true)
  }else{
    cb(new Error("Not an image! Please upload only images."))
  }
}

//multer middleware

module.exports = multer({storage, fileFilter: checkFileFilters, limits:{
  fieldSize: 5*1024*1024
}})