import React from 'react'
const MainScreen = ({title , data}) => {

  return (
    <>

    
    <div className='container'>

    <div className="page">
    {
        title 
        &&
        <>
<h1 className='heading' style={{padding:'20px '}}>Welcome to Notes App </h1>

          
        </>
    }
   
    </div>

    
    
    </div>
    
    </>
  )
}

export default MainScreen