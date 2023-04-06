const express = require("express");
const {registerUser , authUser} = require("../controller/userControllers");

const router = express.Router();
router.route('/').post(registerUser);
console.log("route")
router.route("/login",()=>{
    console.log("hi");
}).post(authUser);

module.exports = router;