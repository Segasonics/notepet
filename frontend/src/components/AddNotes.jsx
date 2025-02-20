import React, { useState } from 'react'
import { useContext } from 'react'
import { NoteContext } from '../context/NoteState'


const AddNotes = ({isValid}) => {
    const {createNote}=useContext(NoteContext)
     const[note,setNote]=useState({
        title:"",description:"",
     })

     const[image,setImage]=useState(null)

     const handleSubmit=(e)=>{
        if(isValid===false){
            alert("Login or signup to add a note")
        }
          e.preventDefault()
          const formData =new FormData();
          formData.append("title",note.title)
          formData.append("description",note.description)
          if(image){
            formData.append("image",image)
          }
          createNote(formData)
          setNote({title:"",description:""})
          setImage(null)
          
     }

    const handleOnChange=(e)=>{
        const{name,value}=e.target;
        setNote((note)=>{
            return{
                ...note,
                [name]:value
        }
        })    
    }
    const handleFileChange=(e)=>{
        setImage(e.target.files[0])
      }
  return (
    <>
       <div className='flex flex-col mx-2 sm:mx-auto mt-20 '>
    <form className='mx-auto border-2 border-black p-8 w-full' onSubmit={(e) => handleSubmit(e)}>
        <div className='mb-3'>
            <label className='text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white' >
                Title :
                <input className='border-2 mt-4 w-full rounded-md py-1.5 placeholder:text-gray-400 sm:text-sm p-10 text-black' type='text' name='title' value={note.title} onChange={(e) => handleOnChange(e)} placeholder='Title...' />
            </label>
        </div>
        <div className='mb-3'>
            <label className='block mb-2 text-sm font-medium dark:text-white text-left'>
                Description :
                <textarea rows={4} cols={50} className=' text-black w-full border-2 rounded-md py-1.5 placeholder:text-gray-400 sm:text-sm p-10' type='text' name='description' value={note.description} onChange={(e) => handleOnChange(e)} placeholder='Description...' />
            </label>
        </div>
        <div className="mb-3">
            <label className='block mb-2 text-sm font-medium dark:text-white text-left'>
                Image :
                <input className='w-full rounded-md border-2 py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm p-10' type='file' name="image" onChange={(e) => handleFileChange(e)} placeholder='File...' />
            </label>
        </div>
        <button className='bg-gray-700 p-4 rounded-2xl text-2xl text-white hover:border-none'>keep note</button>
    </form>
</div>

</>
  )
}

export default AddNotes
