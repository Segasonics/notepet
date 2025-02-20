import React, { useEffect, useState, useContext } from 'react'
import Sidebar from './Sidebar'
import { FaBars, FaTimes } from "react-icons/fa"
// import Notes from './Notes';
import AddNotes from './AddNotes';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { NoteContext } from '../context/NoteState';
import Notes from './Notes';

const Home = ({isValid}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => {
    console.log("Sidebar toggled")
    setIsOpen(!isOpen)

  }
  const { fetchallNotes,notes} = useContext(NoteContext);
  console.log(notes)

  useEffect(()=>{
    fetchallNotes()
 },[])


  // const navigate=useNavigate()
  //     const {fetchallNotes}=useContext(NoteContext)
  //     useEffect(() => {
  //       axios.get('https://noteend.onrender.com/api/v1/users/refreshtoken', { withCredentials: true })
  //         .then(response => {
  //           // Handle successful authentication
  //           console.log(response.data);
  //         })
  //         .catch(error => {
  //           if (error.response && error.response.status === 401) {
  //             // Redirect to login if not authenticated
  //             navigate('/login');
  //             fetchallNotes()
  //           }
  //         });
  //     }, []);
  //  if(!fetchallNotes) return <p>Loading...</p>
  if(!notes) return <h1>Login to add notes...</h1>
  return (
    <>
      <div className=' bg-white flex min-h-screen xs:hidden'>
        {/* Mobile nav menu */}
        <div className=' p-2 cursor-pointer xs:hidden'>
          <button className='absolute left-90 text-gray-100 text-md cursor-pointer z-50 pt-1 md:hidden text-2xl' onClick={() => toggleSideBar()}>
            {
              isOpen ? <FaTimes /> : <FaBars />
            }
          </button>
        </div>
        <Sidebar isOpen={isOpen} toggleSideBar={toggleSideBar}/>
        <div className='absolute flex-1 items-center text-center md:left-80 xs:left-0 w-full sm:w-3/4'>
          <h1 className='text-3xl md:pl-4 pl-10 sm:text-4xl md:text-5xl font-serif pt-2\0 sm:pt-3 fixed w-full sm:w-4/5 bg-slate-600 text-white text-left p-2 sm:p-4'>
            Enter your notes
          </h1>

          <div>
            <AddNotes isValid={isValid} isOpen={isOpen} />
            <Notes />
          </div>
        </div>
      </div>


    </>
  )
}

export default Home
