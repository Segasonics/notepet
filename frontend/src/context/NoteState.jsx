import axios from "axios";
import { createContext, useState } from "react";


export const NoteContext = createContext()

export const NoteState = ({ children }) => {
    const url = "https://noteend.onrender.com"
    //const url = "http://localhost:8000"

    const [notes, setNotes] = useState([]);

    const createNote = async (formData) => {
        try {

            const { data } = await axios.post(`${url}/api/v1/notes/createnote`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true
            })
            if (data.success) {
                setNotes((prevNotes) => [...prevNotes, data.data])
            }
        } catch (error) {
            console.error('Error during registration:', error.response ? error.response.data : error.message);
        }
    }
    const fetchallNotes = async () => {
        try {
            const { data } = await axios.get(`${url}/api/v1/notes/fetchallnote`, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            console.log(data.data)
            if (data.success) {
                setNotes(data.data)
            }
        } catch (error) {
            console.error('Error during getting notes:', error.response ? error.response.data : error.message);
        }

    }

    const updateNote = async (id, formData) => {
        try {
            const { data } = await axios.put(`${url}/api/v1/notes/updatenote/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true
            })
            console.log(data)
            if (data.success) {
                setNotes((prevNotes) =>
                    prevNotes.map((note) => note._id === id ? data : note)
                )
            }
        } catch (error) {
            console.error('Error while updating the  note:', error.response ? error.response.data : error.message);
        }
    }
    const deleteNote = async (id) => {
        try {
            const { data } = await axios.delete(`${url}/api/v1/notes/deletenote/${id}`, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            console.log(data)
            //his checks each note in the array, and if the note’s _id does not match the id provided, it includes that note in the newNotes array.
            const newNotes = notes.filter((note) => note._id !== id)
            setNotes(newNotes)
        } catch (error) {
            console.error('Error while updating the  note:', error.response ? error.response.data : error.message);
        }
    }

    return (
        <NoteContext.Provider value={{ notes, createNote, fetchallNotes, deleteNote, updateNote }}>{children}</NoteContext.Provider>
    )
}

