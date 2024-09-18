import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        username: "", email: "", password: ""
    })
   

    const handleSubmit=async(event)=>{
        event.preventDefault()
        try {
            const { data } = await axios.post("https://noteend.onrender.com/api/v1/users/register",
                {
                    username: credentials.username,
                    email: credentials.email,
                    password: credentials.password
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                }
            );
            console.log(data);
            // Handle success

            if (data.success) {
                navigate("/");
            }
        } catch (error) {
            console.error('Error during registration:', error.response ? error.response.data : error.message);
        }
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }
    return (
        <div className='flex justify-center items-center  flex-col h-screen  sm:mx-auto w-full sm:w-2/3 px-4 max-h-full'>
            <h2 className='text-2xl md:text-3xl md:w-auto mb-4'>Sign Up</h2>
            <form className='mx-auto border-2 border-black p-8 w-full' onSubmit={(event)=>handleSubmit(event)}>
                <div className='mb-3'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' >
                        Username :
                        <input autoComplete='current-username' className='block border-2 mt-4 w-full rounded-md py-1.5 placeholder:text-gray-400 sm:text-sm p-10' type='text' name='username' value={credentials.username} onChange={(e) => handleOnChange(e)} placeholder='Enter your username...' />
                    </label>
                </div>
                <div className='mb-3'>
                    <label className='block mb-2 text-sm font-medium dark:text-white'>
                        Email :
                        <input autoComplete='current-email' className='block w-full border-2 rounded-md py-1.5 placeholder:text-gray-400 sm:text-sm p-10' type='email' name='email' value={credentials.email} onChange={(e) => handleOnChange(e)} placeholder='Enter your email...' />
                    </label>
                </div>
                <div className="mb-3">
                    <label className='block mb-2 text-sm font-medium dark:text-white'>
                        Password :
                        <input autoComplete='current-password' className='block w-full rounded-md border-2 py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm p-10' type='password' name="password" value={credentials.password} onChange={(e) => handleOnChange(e)} placeholder='Enter your password...' />
                    </label>
                </div>
                <button className='bg-black text-white hover:border-none p-2 text-2xl rounded-md'>Submit</button>
            </form>

            <div className='pt-4'>
                <p>Already have an account ?<span className='hover:underline cursor-pointer' onClick={() => navigate("/login")}>Log in</span></p>
            </div>
        </div>
    )
}

export default SignUp
