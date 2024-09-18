import React, { useContext, useEffect, useState } from 'react'
import { NoteContext } from '../context/NoteState'
import { FaTrash } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import Update from './Update';
import Masonry from 'react-masonry-css'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";


const Notes = () => {
  const[isEditing,setIsEditing]=useState(false)
  const[noteToEdit,setNoteToEdit]=useState(null)
  const { notes ,deleteNote,fetchallNotes} = useContext(NoteContext);

  const breakpointObj ={
    default:4,
    3000:5,
    2000:4,
    1200:3,
    1000:2,
    500:1,
}

  useEffect(()=>{
     fetchallNotes()
  },[])

  const handleClick=()=>{
    setIsEditing(true)
    setNoteToEdit(notes)
  }

  const handleCloseEdit=()=>{
    setIsEditing(false)
    setNoteToEdit(null)
  }
  console.log(notes)
  return (
    <>
    <div className='flex justify-between m-8'>
      <h2 className="text-5xl text-center mt-5">Your notes</h2>
      <Link to="/" className="text-3xl text-center flex mt-10"><FaArrowLeft /><span className='text-lg'>Home</span></Link>
    </div>
    <div className='flex mt-4 w-full p-6'>
      
    <Masonry
        key={notes?._id}
        breakpointCols={breakpointObj}
        className='flex w-max'
        columnClassName="masonry-grid-column">
        {
          notes.map((note) =>
            <div className='border-2 border-gray-700 p-4 rounded-md sm:m-2 mb-2' key={note?._id}>
              <h1 className='text-3xl text-center'>{note?.title}</h1>
              <img src={note?.image} className='mt-3 rounded-full w-full' />
              <p className='text-lg mt-3 text-center'>{note?.description}</p>
              <div className='flex flex-row justify-between'>
                <button onClick={()=>deleteNote(note?._id)}>
                  <FaTrash />
                </button>              
                  <FaRegEdit className='cursor-pointer' onClick={()=>handleClick()}/>
              </div>
            </div>
          )
        }
      </Masonry>
    </div>
    <div className='container' >
    {
                    isEditing ? noteToEdit.map((note)=><Update handleCloseEdit={handleCloseEdit} noteToEdit={note} key={note?._id}/>):""
                  }
    </div>
    </>
  )
}

export default Notes

