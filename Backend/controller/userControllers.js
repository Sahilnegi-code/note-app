// const asyncHandler = require("express-async-handler");
// const user = require("../modals/userModal");
const User = require("../modals/userModal");
const generateToken = require("../util/generateToken");

const registerUser = async (req  ,res) => {

    const {name , email , password , pic } = req.body;


    try{
        const userExists = await User.findOne({email});
        if(userExists){
            res.status(400);
        }
    }
    catch(err){
     
    }
    try{

        const user = await User.create({
            name,
            email,
            password,
            pic
        });
        if(user){
            res.status(201).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
                pic : user.pic,
                token : generateToken(user._id)
            });
        }
        else{
            res.status(400);
            throw new Error('Error Occured! s');
        }
    }
    catch(err){
        res.json({err});
    }
   
}

const authUser = async (req  ,res) =>{
    const { email , password  } = req.body;
    try{
        const user = await User.findOne({email});

        if(user && (await user.matchPassword(password))){
            res.json({
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
                pic : user.pic,
                token : generateToken(user._id)
            });
        }
        else{
            res.status(400 );
            throw new Error("Invalid Email ");
        }
    }
    catch(err){
        res.json({err});
    }

    
}


module.exports = {registerUser , authUser};