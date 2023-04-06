const mongoose = require('mongoose');
const bcrypt =  require('bcryptjs')

const userSchema =  mongoose.Schema({
    
    name : {
        type : String,
        required:true
    },
    
    email : {
        type : String,
        required:true,
        unique:true
    },
    
    password : {
        type : String,
        required:true,
    },
    isAdmin : {
        type : Boolean,
        required:true,
        default:false
    },
pic:{
    type:String,
    required: true,
    default: "https://wallpaperaccess.com/full/2213426.jpg"
}
     
    },
    {
        timestamps:true
    }
  );
  userSchema.pre('save', async function(next){
    console.log("hello");
    if(!this.isModified('password')){
        console.log( bcrypt.hash(this.password , salt) , "negi")
        next();
    }
    const salt = await bcrypt.genSalt(8);
    this.password =  bcrypt.hash(this.password , salt);
    console.log( bcrypt.hash(this.password , salt)); 
  })
  userSchema.methods.matchPassword = async function (enterPassword){
    console.log(enterPassword , this.password);
    return enterPassword === this.password;  
  }
  const user = mongoose.model("user", userSchema);
  module.exports = user;
  