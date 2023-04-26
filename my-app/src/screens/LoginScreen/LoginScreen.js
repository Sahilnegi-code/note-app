import React from 'react'
import axios from 'axios';
import { useState , useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Loading from '../../component/Loading';
import ErrorMessage from '../../component/ErrorMessage';
import  './LoginScreen.css'
 const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [userInfo, setuserInfo] = useState({});
  const navigate = useNavigate();


  
    
    const submitHandler = async (e)=>{
        e.preventDefault();
        try{
            const config  = {
                headers:{
                    "Content-type":"application/json"
                }
            }
            
              setLoading(true);
            
            setError(false);
            const { data } = await axios.post('api/users/login',{
                email , password 
            },config);
            
            setuserInfo(data);
         
            localStorage.setItem('userInfo',JSON.stringify(data));
            setLoading(false);
            if(Object.keys(userInfo).length !== 0 ){
              navigate("/mynotes" ,  { replace: true });
            }
        }
    catch(err){
     
      setError("Invalid Email Id or Password");
      setLoading(false);

    }
  }



  useEffect(()=>{

    if(localStorage.length > 0 ){
      localStorage.clear();
    }
    
  },[])
  return (
    <>
   <div className='login_center'>
<div>

<div className='login_container'>
<div  >
<h1 className='heading'>Login</h1>
</div>


{
  error && < ErrorMessage err = {error} />
}
{
 loading &&  <Loading/>
}

<div >
<form onSubmit={submitHandler}>
<div class="form-group">
<label for="exampleInputEmail1">Email address</label>
<input type="email" class="form-control"
onChange={(e)=>{
    setEmail(e.target.value)
}}
value = {email}
id="exampleInputEmail1" aria-describedby="emailHelp"/>

</div>
<div class="form-group">
<label for="exampleInputPassword1">Password</label>
<input type="password" class="form-control" 
onChange={(e)=>{
    setPassword(e.target.value);
}}

value = {password}
id="exampleInputPassword1"/>
</div>

<button type="submit" class="btn btn-primary"
>Submit</button>
</form>
</div>

</div>


</div>

    </div>
   

    </>
  )
}
export default LoginScreen; 
