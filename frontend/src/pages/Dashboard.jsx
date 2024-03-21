import { Link } from "react-router-dom"
import TableProjects from "../components/TableProjects"
const API_URL = "http://localhost:5005/api";
import axios from "axios";
import { useEffect, useState } from "react";


const Dashboard = () => {
  const [projects, setProjects] = useState([])

  const getData=async()=>{
    const response=await axios.get(`${API_URL}/project`)
    console.log(response)
    setProjects(response.data.projects)
 
   }

   useEffect(() => {
      getData()
   }, [])
   
  return (
    <div className="container p-4 mx-auto">

        <Link to={'/createProject'} className="rounded bg-blue-400 px-4 py-2 text-slate-50" >Create Project</Link>
      
        <TableProjects projects={projects} />
    </div>
  )
}

export default Dashboard
