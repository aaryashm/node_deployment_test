const mongoose = require('mongoose')

const connectToDB = async()=>{

  try{
    await mongoose.connect("mongodb+srv://mongo-test:1kwnOoryeAwYRW9N@cluster0.fmmjp.mongodb.net/")  
    console.log("db connected")
  }catch(e){
    console.log("Mongo Connection failed",e)
    process.exit(1)
  }

}

module.exports = connectToDB