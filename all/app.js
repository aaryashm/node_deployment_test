const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://mongo-test:1kwnOoryeAwYRW9N@cluster0.fmmjp.mongodb.net/").then(()=>console.log("connected")).catch(()=>console.log("Connection Failed"))

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema)

async function runQueries(){

  try{

    // const newUser = await User.create({
    //   name: "Jow Woww",
    //   email: "jow@woww.com",
    //   age: 20,
    //   isActive: true,
    //   tags: ["qa", "manager"],
    // })
    // console.log("created New user", newUser)


    // const allUsers = await User.find()
    // console.log(allUsers);

    // const getInactiveUsers = await User.find({isActive: false})
    // console.log(getInactiveUsers)

    // const user = await User.findOne({age: 30})
    // console.log(user)

    // const user = await User.find({age: 30}).select('name -_id')
    // console.log(user)

    // const limitedUsers = await User.find().limit(5).skip(1)
    // console.log(limitedUsers)

    // const users = await User.find().sort({age: -1})
    // console.log(users)

    // const users = await User.countDocuments({isActive: true})
    // console.log(users)

    // const users = await User.findByIdAndDelete("id")
    // console.log(users)

    // const users = await User.findByIdAndUpdate(newUser.id, {$set: {age: 45}, $push: {tags: 'updated'}}, {new: true})
    // console.log(users)



  }catch(e){
    console.log("Error: ", r)
  }finally{
    await mongoose.connection.close()
  }


}

runQueries()