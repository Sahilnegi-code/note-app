import React from 'react'
import { useState } from 'react'
import ErrorMessage from '../../component/ErrorMessage'
import axios from 'axios'
import Loading from '../../component/Loading'
import { useNavigate } from "react-router-dom";
// import { json } from 'express';

const RegisterScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [pic , setPic] = useState("")
  const [confirmpassword, setconfirmPassword] = useState("")
  const [message , setMessage] = useState("")
  const [picMessage , setPicMessage] = useState("")
  const [error , setError] = useState("")
  const [loading , setLoading] = useState(false)
  const navigate = useNavigate();
 
 



 const submitHandler = async(e)=>{
  e.preventDefault();
  console.log(email);
 
  if(password !== confirmpassword){
    setMessage("Password do not match");
  }
  else{
  
setMessage("");
try{

  const config  = {
    headers:{
        "Content-type":"application/json"
    },
  }
  
  setLoading(true);
  const { data } = await axios.post('http://localhost:5000/api/users',{
    name, email , pic , email , password 
  },config);

  setLoading(false);
  localStorage.setItem("userInfo", JSON.stringify(data));
  navigate("/login")
}
catch(err){
  setLoading(false);
  setMessage("User Exist Already ");
  setError(err);

  }

  }
 }




 
 const postDetails = (pics) => {
  if(!pics){
    console.log("pics");
    return setPicMessage("Pls Select an Image");
  }
  console.log( pics, "<---");
  setPicMessage(null);
  console.log( pics.type);
  if(pics.type === 'image/jpeg' || pics.type === 'image/png' ){
    console.log( "inside")
    var data = new FormData();
    
    data.append("file", pics);
  
    data.append("upload_preset" , 'Notes_app');
    data.append('cloud_name' , 'dyxs7sfix');
    
 console.log(data);
    fetch('https://api.cloudinary.com/v1_1/dyxs7sfix/image/upload',{
      method : "post",
      body :data
    }).then((res)=>{
      return res.json();
    }).then((data)=>{
      setPic(data.url.toString());
    }).catch((err)=>{
     
    }) ;


  }
  else{
    return setPicMessage("Please select an Image");
  }

 } 







  return (
    <>
    <div className='container'>

    {
      
        message && < ErrorMessage err = {message} />
      
    }
    {
      loading && <Loading/>
    }

    <form onSubmit={ (e)=> {submitHandler(e) }  }>
  
    
    <div className="form-group col-md-12">
      <label for="inputAddress">Name</label>
      <input type="text"
       onChange={
        (e) => setName(e.target.value)
      }
      value={name} 
      className="form-control" id="inputAddress" placeholder="Enter Name" required/>
    </div>

      <div className="form-group col-md-12">
        <label for="inputEmail4">Email Address</label>

        <input type="email" className="form-control"
        onChange={
          (e) =>{
            setEmail(e.target.value)
          }
        }
        value = {email}
        placeholder='Enter Email-id' id="inputEmail4"
        required/>
      </div>

      <div className="form-group col-md-12">
        <label for="inputPassword4">Password</label>
        <input type="password" onChange=
        {
          (e)=> setPassword(e.target.value)
        }
        value={password}
         placeholder='Enter Password' class="form-control" id="inputPassword4" required/>
      </div>

      <div className="form-group ">
      <label for="inputPassword4">Confirm Password</label>
      <input type="password"
      value={confirmpassword}
      onChange={
        (e)=>{
          setconfirmPassword(e.target.value);
        }
      }
      placeholder='Enter Password' class="form-control" id="inputPassword4"
      required/>
    </div>
      
    {
      picMessage && < ErrorMessage err = {picMessage} />
    }
    <label >Profile Pic</label>
  <div className="custom-file mb-3">
  <input type="file" class="custom-file-input" id="validatedCustomFile" onChange={(e)=>{
    postDetails(e.target.files[0])
  
  }} required />
  <label className="custom-file-label" for="validatedCustomFile" >Choose file...</label>
  <div className="invalid-feedback">Example invalid custom file feedback</div>
</div>
   
  
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
  <div className='mt-4'>
  <span>Have an account Login ? </span>
  <a  href="http://google.com">Login </a>
  </div>
    </div>
   
    </>
  )
}

export default RegisterScreen