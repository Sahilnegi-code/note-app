import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CreateNote = () => {
   const [title , setTitle]  =  useState("");
   const [content , setContent]  = useState("");
   const [category , setCategory] = useState(""); 
   const navigate = useNavigate();
const resetHandler = ()=>{
    setTitle("")
    setContent("");
    setCategory("");

    }
   const submitHandler = async(e)=>{
    e.preventDefault();
    let userInfo = localStorage.getItem("userInfo"); 
    userInfo = JSON.parse(userInfo);


    try{
      let config = {
        headers:{
          "Content-type":"application/json",
          Authorization : `Bearer ${userInfo.token}`
        }
      };

      const { data } = await axios.post('http://localhost:5000/api/notes/create',{title, content, category
    },config);
    navigate("/mynotes");

    }
    catch(err){
  
    }





    resetHandler();
   }

  return (
    <>
    <div class="card" style={{width: "18rem"}}>

  <h5 class="card-title">Notes</h5>
  <div class="card-body">
  <form onSubmit={submitHandler}>
  <div class="form-group">
    <label for="exampleFormControlInput1">Title</label>
    <input type="text"
    value ={title}
    onChange={(e)=>setTitle(e.target.value)}
    class="form-control" id="exampleFormControlInput1" placeholder="Enter the title "
    />
  </div>


  <div class="form-group">
    <label for="exampleFormControlTextarea1">Content</label>
    <textarea class="form-control" id="exampleFormControlTextarea1"
       value ={content}
       placeholder="Enter the Content"
       onChange={(e)=>setContent(e.target.value)}
    rows="3"></textarea>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Category</label>
    <input type="text"
       value ={category}
       onChange={(e)=>setCategory(e.target.value)}
    class="form-control" id="exampleFormControlInput1" placeholder="Type the category"/>
  </div>

  <a >
                <button className='btn btn-outline-success  m-3' type='submit' >Submit</button>
                </a>
                <a >
                <button className='btn btn-outline-danger  m-3 ' >Clear</button>    
            </a>

</form>

  </div>
</div>
    </>
  )
}

export default CreateNote
