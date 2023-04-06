import React, { useState } from 'react'
import Header from './component/Header/Header' 
import LandingPage from './screens/LandingPage/LandingPage'
import {   Routes , Route , BrowserRouter } from 'react-router-dom';
import MyNotes from './screens/MyNotes/MyNotes';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen'; 
import  LoginScreen  from './screens/LoginScreen/LoginScreen';
import CreateNote from './screens/CreateNote/CreateNote';
import SingleNote from './screens/SingleNote/SingleNote';

function App() {
   
  const [search,setSearch] = useState("");
 
  return (
    <>
    <div >
    <BrowserRouter > 
    <Header setSearch ={setSearch} />
    
    <main  style={{  position: 'relative',
  minHeight: '89vh'
}} >
    
    <Routes>
    <Route path = "/"  element = {  < LandingPage />   }  />
    <Route path = "/login"  element = {  < LoginScreen  />   }  />
    <Route path = "/register"  element = {  < RegisterScreen />   }  />
    <Route path = "createnote" element = {  < CreateNote />}  />
    <Route path = "/note/:id" element = { < SingleNote /> } />
    <Route path = "/mynotes" element = { < MyNotes search = {search}  /> } />
  
    </Routes>

    </main>
    
    </BrowserRouter> 
      </div>
  

    </>
  )
}

export default App
