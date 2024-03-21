import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost:5005/api";
const CreateProject = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
   
    const [picture  , setPicture  ] = useState('')
  
    const [errorMessage, setErrorMessage] = useState(undefined);
    const navigate = useNavigate();

    const handleSubmit=async (e)=>{

        e.preventDefault()
  
     
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("picture", picture);
      
        try {
          const response = await axios.post(`${API_URL}/project/createProject`, formData);
          if (response.status === 201) {
                   navigate('/')
          
        } else {
          setErrorMessage(response.data.message);
        }
        } catch (error) {
          setErrorMessage(error.response.data.message);
        }
    }
  return (
    <div className="container mx-auto">
    <div className="w-full my-4 p-16 flex flex-col gap-4 justify-center items-center shadow-lg rounded-lg sm:w-1/2 mx-auto">
      <h1 className="text-2xl">Create Project</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
         <input type="text"  placeholder="title" className="w-full rounded p-2"  
         onChange={(e)=>setTitle(e.target.value)} 
         />
         <input type="text"  placeholder="description" className="w-full rounded p-2" 
         onChange={(e)=>setDescription(e.target.value)} 
         />

<input type="file" placeholder="title" className="input input-bordered w-full max-w-xs"
      onChange={(event) => {
        setPicture(event.target.files[0]);
      }}
    />
         <button className="bg-blue-400 text-white px-4 py-2 rounded">Save</button>
    
         <p className="text-red-500 p-4">{errorMessage}</p>
      </form>

    </div>

 </div>
  )
}

export default CreateProject