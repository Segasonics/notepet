
import {Routes,Route} from "react-router-dom"
import './App.css'
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import Notes from "./components/Notes";
import { useState } from "react";

function App() {
  const[isValid,setIsValid]=useState(false)

  const isValidFunc=(value)=>{
    setIsValid(value)
  }

  return (
    <>
    
      <Routes>
         <Route path='/sign-up' element={<SignUp isValid={isValid}  isValidFunc={isValidFunc}/>} />
         <Route path='/login' element={<Login isValid={isValid} isValidFunc={isValidFunc}/>} />  
         <Route path='/' element={<Home isValid={isValid} />} />   
         <Route path='/notes' element={<Notes />} />   
         
      </Routes>     

    </>
  )
}

export default App
