
import {Routes,Route} from "react-router-dom"
import './App.css'
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import Notes from "./components/Notes";

function App() {
  return (
    <>
    
      <Routes>
         <Route path='/sign-up' element={<SignUp />} />
         <Route path='/login' element={<Login />} />  
         <Route path='/' element={<Home />} />   
         <Route path='/notes' element={<Notes />} />   
         
      </Routes>     

    </>
  )
}

export default App
