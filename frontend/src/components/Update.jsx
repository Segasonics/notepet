import React, { useState,useEffect } from 'react'
import { FaExpandArrowsAlt } from "react-icons/fa";
import { useContext } from 'react';
import { NoteContext } from '../context/NoteState';

const Update = ({handleCloseEdit,noteToEdit}) => {
    const[note,setNote]=useState({
        title:noteToEdit?.title || "",
        description:noteToEdit?.description || ""
    })
    const[image,setImage] =useState(null);
    const {updateNote}=useContext(NoteContext)

    useEffect(() => {
        setNote({
            title: noteToEdit?.title || "",
            description: noteToEdit?.description || ""
        });
    }, [noteToEdit]);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setNote((prevNote) => ({
            ...prevNote,
            [name]: value
        }));
    };

    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData =new FormData();
        formData.append("title",note?.title)
        formData.append("description",note?.description)
        if(image){
            formData.append("image",note?.image)
        }
        updateNote(noteToEdit?._id,formData);
        handleCloseEdit()
    }
    const handleFileChange=(e)=>{
       setImage(e.target.files[0])
    }
    console.log("NoteToEdit",noteToEdit)
  return (
    <div className=' mx-2 sm:mx-auto h-2/3 p-4 m-2 mt-20 w-full sm:w-1/2 fixed inset-0 flex  justify-center z-50 bg-slate-600'>
        <div className='relative'>
        <span><FaExpandArrowsAlt className='absolute top-5 left-2 rounded-sm bg-red-700 text-center cursor-pointer'
          onClick={()=>handleCloseEdit()}
          />
            <p className='text-white sm:p-4 sm:ml-4 hidden  sm:block'>close</p>
            </span>
        </div>
    <form className='mx-auto items-center border-2 border-black p-8' onSubmit={(e) => handleSubmit(e)}>
        <div className='mb-3'>
            <label className='text-left mb-2 text-sm font-medium text-gray-100 dark:text-white' >
                Title :
                <input className='border-2 mt-4 w-full rounded-md py-1.5 placeholder:text-gray-400 sm:text-sm p-10 text-gray-900' type='text' name='title' value={note?.title} onChange={(e) => handleOnChange(e)} placeholder='Title...' />
            </label>
        </div>
        <div className='mb-3'>
            <label className=' mb-2 text-sm font-medium dark:text-white text-gray-100  text-start'>
                Description :
                <textarea rows={4} cols={50} className='block w-full border-2 rounded-md py-1.5 placeholder:text-gray-400 sm:text-sm p-10 text-gray-900' type='text' name='description' value={note?.description} onChange={(e) => handleOnChange(e)} placeholder='Description...' />
            </label>
        </div>
        <div className="mb-3">
            <label className=' mb-2 text-sm font-medium dark:text-white text-left text-gray-100'>
                Image :
                <input className=' w-full rounded-md border-2 py-1.5 placeholder:text-gray-400 sm:text-sm p-10 text-gray-900' type='file' name="image" onChange={(e) => handleFileChange(e)} placeholder='File...' />
            </label>
        </div>
        <button className='bg-gray-700 p-4 rounded-2xl text-2xl text-white hover:border-none'>keep note</button>
    </form>
</div>
  )
}

export default Update
