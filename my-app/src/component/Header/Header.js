
 /* eslint-disable jsx-a11y/anchor-is-valid */
 import {Link , useNavigate} from 'react-router-dom'
import  './header.css';
function Header({setSearch}) {
let user = localStorage.getItem("userInfo");
user = JSON.parse(user);
// console.log(user);
  const navigate = useNavigate();
    return (
      <>
      <div class="container" className='header'>
      <nav class="navbar navbar-expand-lg navbar-light bg-light " >
        <div >
        <span class="navbar-brand"  className='content'> {user == null ?"User":user.name }</span>
      
      {
        user && (

          <span className='user_img content' >     <img alt ="" src={user.pic} style ={{ borderRadius:'100%' ,marginLeft:'0.5rem'} }/> </span>
        )
      }
        </div>
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

    
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
       
      
    
      
      
      <ul class="navbar-nav  w-50 justify-content-end ">
          <li class="nav-item active mr-4">
            <a href="!#" class="nav-link" >   
            <Link to = '/mynotes'>  Notes  </Link>
            <span class="sr-only">(current)</span></a>
          </li>
        
          <li class="nav-item dropdown ml-4">
          <a  class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">Dropdown
        </a>
            <div class="dropdown-menu dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
            <a  class="dropdown-item" onClick={()=>{
              localStorage.removeItem("userInfo");
              navigate("/login");
            }} >
              Log Out
              </a>
          </div>
          </li>
        
        </ul> 
        <form class="form-inline my-2 my-lg-0 w-50 justify-content-end ">
        <input class="form-control mr-sm-2" onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="Search" aria-label="Search"/>
        
      </form>
      </div>

     


    </nav>
      </div>
   
    </>     
    
   
  );
}

export default Header;