/* eslint-disable jsx-a11y/anchor-is-valid */
import React ,{useEffect,useState} from 'react'
import {Link} from "react-router-dom";
import  './MyNotes.css'
import MainScreen from '../../component/MainScreen/MainScreen'
import axios from 'axios';
import Header from '../../component/Header/Header';

const MyNotes = ({search}) => {
  const [notes, setnotes] = useState([])


  const deleteHandler = async(notesId)=>{
// const isDel = window.confirm("Do you want to delete this ?")  ;

      let userInfo = localStorage.getItem("userInfo"); 
      userInfo = JSON.parse(userInfo);
      let config = {  
      headers:{
        "Content-type":"application/json",
        Authorization : `Bearer ${userInfo.token}`
      }
    };



      try{
        await axios.delete(`http://localhost:5000/api/notes/${notesId} `, config);
        fetchNotes(config,userInfo._id);
    }catch(err){

    } 
  

}
const fetchNotes = async (config,id)=>{
  const {data} = await  axios.get(`/api/notes`, config ,id);
  
  setnotes(data);
}

  
useEffect(() => {

  
  
  let userInfo = localStorage.getItem("userInfo"); 
      userInfo = JSON.parse(userInfo);


      let config = {
        headers:{
          Authorization : `Bearer ${userInfo.token}`
        }
      };
 
  fetchNotes(config,userInfo._id);

 
}, [])


  return (
    <>
    {/* <Header />  */}
    <div className='mainback'>
    <div className='container'>
    <MainScreen title ="hello"/>
    <Link to = "/createnote" >

    <button type='button' className = "btn btn-secondary">
    Create New Note
    </button>

    </Link>
    

    {

      notes.filter((noteFilter)=>(
        noteFilter.title.toLowerCase().includes(search)
      )).map ( notes=>{
        console.log( `#multiCollapseExample${notes._id}` );

        return (
          <>
          <div className="accordion my-4" key ={notes._id} id="accordionExample">

          <div class="card">
          <div class="card-header row">
          <div className='col-6'>
       <h4 className=' text-body  ' >Title : <span className=' h2'> {notes.title} </span> </h4>       
          </div>
          <div className='col-6 text-right'>
          <button type='button' 
          data-toggle="collapse" data-target = {`#multiCollapseExample${notes._id}`}
           aria-expanded="false" aria-controls= {`multiCollapseExample${notes._id}`}
          className='btn btn-primary '>
          Open
          </button>
          </div>
          </div>

<div className='collapse multi-collapse' id={`multiCollapseExample${notes._id}`}>
<div class="card-body">

            <h5 class="card-title">
            <h2 class=" text-center p-2 " >   {notes.category.toUpperCase()} </h2>

              
              </h5>

              


            <p className='card-context bg-secondary'>
       
            <p className='text-white h3 text-body p-2'  > {notes.content} </p>
              </p>
            <div className='text-center'>
            <a href={`/note/${notes._id}`} class="btn btn-success mx-2 "> Edit </a>
            <a  class="btn btn-danger" onClick={()=>deleteHandler(notes._id)}>Delete</a>
            </div>
          </div>
</div>
          

          



        </div>
        </div>
          </>
        )
      })  

    }
   

    </div>
    
 </div>
    
    </>
  )
}

export default MyNotes;