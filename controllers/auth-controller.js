const { use } = require("bcrypt/promises")
const User = require("../models/User")
const bcrypt = require('bcrypt/bcrypt')
const jwt = require('jsonwebtoken')

const registerUser = async(req, res)=>{
  try{
    const {username, email, password, role} = req.body
    
    const checkExistingUser = await User.findOne({$or: [{username}, {email}]})

    if(checkExistingUser){
      return res.status(400).json({
        success: false,
        "message": "User already exists."
      })
    }else{
      const salt = await bcrypt.genSalt(10)
      const hashedPass = await bcrypt.hash(password, salt)

      const user = new User({
        username,
        password: hashedPass,
        email,
        role
      })

      await user.save()
      if(user){
        res.status(201).json({
          success: true,
          message: "User registered successfully"
        })
      }else{
        res.status(400).json({
          success: false,
          message: "Unable to register user."
        })
      }

    }
    
  }catch(e){
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again."
    })
  }
}

const loginUser = async(req, res)=>{
  try{

    const {username, password} = req.body
    const _user = await User.findOne({username})
    if(_user){

      const isPasswordCorrect = await bcrypt.compare(password, _user.password)
      if(isPasswordCorrect){
        //generate bearer token
        const accessToken = jwt.sign({
          userId: _user._id,
          username: _user.username,
          role: _user.role,
        }, process.env.JWT_SECRET_KEY, {expiresIn: '15m'})

        res.status(200).json({
          success: true,
          message: "Logged in successful",
          accessToken
        })


      }else{
        res.status(400).json({
          success: false,
          message: "Invalid Credentials."
        })
      }

    }else{
      res.status(400).json({
        success: false,
        message: "Invalid Credentials."
      })
    }
    
  }catch(e){
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again."
    })
  }
}

const changePassword = async(req, res)=>{
  try{

    const userId = req.userInfo.userId
    const {oldPassword, newPassword} = req.body
    const _user = await User.findById(userId)
    if(_user){

      const isPasswordCorrect = await bcrypt.compare(oldPassword, _user.password)
      if(isPasswordCorrect){
        //generate bearer token
        const salt = await bcrypt.genSalt(10)
        const newPass = await bcrypt.hash(newPassword, salt)

        _user.password = newPass
        await _user.save()

        res.status(200).json({
          success: true,
          message: "Password Changed Successfully"
        })


      }else{
        res.status(400).json({
          success: false,
          message: "Old password doesnot match."
        })
      }

    }else{
      res.status(400).json({
        success: false,
        message: "User Not Found."
      })
    }
    
  }catch(e){
    console.log(e)
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again."
    })
  }
}



module.exports = {
  loginUser,
  registerUser,
  changePassword
}