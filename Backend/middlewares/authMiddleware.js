let jwt = require('jsonwebtoken');
const User = require("../modals/userModal");
const protect = async(req,res,next)=>{
    let token;
    
    if(
        req.headers.authorization
        &&
        req.headers.authorization.startsWith("Bearer")
    ){
        try{
            token = req.headers.authorization.split(" ")[1];
            const decoded =  jwt.verify(token , process.env.JWT_SECRET);
            req.user =  await User.findById(decoded.id).select("-password");
            next();
        }
        catch(err){
            res.status(401);
            // throw new Error("Not authorized ,  token Failed");
        }
    }
    if(!token ){
        res.status(401);
        // throw new Error("Not authorized , no token");
    }
} 
module.exports = {protect};