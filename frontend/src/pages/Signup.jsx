import { Link, Navigate, useNavigate } from "react-router-dom"
import axios from "axios";
import { useState } from "react";
const API_URL = "http://localhost:5005/api";

const Signup = () => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate()
    const handleSubmit =async(e)=>{
        e.preventDefault()
        const requestBody = { email, password };
        try {
          const res=await    axios.post(`${API_URL}/auth/signup`, requestBody)
          console.log(res.data)
          navigate('/login');
        } catch (error) {
          const errorDescription = error.response.data.message;
          setErrorMessage(errorDescription);
        }
    }

  return (
    <>
       <div className="container mx-auto">
          <div className="w-full my-4 p-16 flex flex-col gap-4 justify-center items-center shadow-lg rounded-lg sm:w-1/2 mx-auto">
            <h1 className="text-2xl">Sign Up</h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
               <input type="text"  placeholder="e-mail" className="w-full rounded p-2"  
               onChange={(e)=>setEmail(e.target.value)} 
               />
               <input type="password"  placeholder="password" className="w-full rounded p-2" 
               onChange={(e)=>setPassword(e.target.value)} 
               />
               <button className="bg-blue-400 text-white px-4 py-2 rounded">Signup</button>
               <Link href="/login"> Have already an account? Sign in</Link>
               <p className="text-red-500 p-4">{errorMessage}</p>
            </form>

          </div>

       </div>
    </>
  )
}

export default Signup