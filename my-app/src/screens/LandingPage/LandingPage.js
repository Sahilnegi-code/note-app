import React from 'react'

import './LandingPage.css'
const LandingPage = () => {



    return (
        <>
            <div className="main">
                <div className="container text-center" >
                <div  style ={{display : 'flex' ,  height:'90vh', justifyContent:'center', flexDirection:'column' , border: '2px solid red'}} >
                
                <div  style ={{display : 'flex' , alignItems:'center', flexDirection:'column'}}>
                <div className="text-intro">
     
                    <h1 class="display-2   text-center">Welcome to my Note App</h1>
                    <p className='text-center'> Kepping  Notes </p>
                </div>
                <div className='btnContainer w-100'>
                <a href="/login">
                <button className='btn btn-outline-success  m-3' >Login</button>
                </a>
                <a href="/register">
                <button className='btn btn-outline-danger  m-3 ' >Register</button>    
            </a>

                </div>
            </div>
                
                </div>
                  
                </div>
            </div>
        </>
    )
}

export default LandingPage