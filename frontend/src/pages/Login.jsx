
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { AuthContext } from "../context/auth.context";  // <== IMPORT

const API_URL = "http://localhost:5005/api";

const Login = () => {

    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
  
    const [errorMessage, setErrorMessage] = useState(undefined);
    const { storeToken, authenticateUser } = useContext(AuthContext); 
    const navigate = useNavigate();
  
    
    const handleSubmit=async(e)=>{
      e.preventDefault()
      const requestBody = { email, password };
      try {
        const res =await axios.post(`${API_URL}/auth/login`, requestBody)
  
        storeToken(res.data.authToken)
  
          // Verify the token by sending a request 
          // to the server's JWT validation endpoint. 
        authenticateUser();   
        navigate('/')
      } catch (error) {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      }
  
  
    }
  return (
    <div className="container mx-auto">
    <div className="w-full my-4 p-16 flex flex-col gap-4 justify-center items-center shadow-lg rounded-lg sm:w-1/2 mx-auto">
      <h1 className="text-2xl">Login</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
         <input type="text"  placeholder="e-mail" className="w-full rounded p-2"  
         onChange={(e)=>setEmail(e.target.value)} 
         />
         <input type="password"  placeholder="password" className="w-full rounded p-2" 
         onChange={(e)=>setPassword(e.target.value)} 
         />
         <button className="bg-blue-400 text-white px-4 py-2 rounded">Sign in</button>
         <Link href="/signup"> Don't have an account? Sign up</Link>
         <p className="text-red-500 p-4">{errorMessage}</p>
      </form>

    </div>

 </div>
  )
}

export default Login