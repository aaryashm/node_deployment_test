const mongoose = require('mongoose')

const connectToDB = async()=>{

  try{
    await mongoose.connect(process.env.MONGO_URI)  
  }catch(e){
    console.log("Mongo Connection failed",e)
    process.exit(1)
  }

}

module.exports = connectToDB