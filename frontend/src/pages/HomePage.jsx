import Hero from "../components/Hero"
import Projects from "../components/Projects"
const API_URL = "http://localhost:5005/api";
import axios from "axios";
import { useEffect, useState } from "react";
import About from "./About";

const HomePage = () => {
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
   
<>
    <Hero />
    <About />
    <Projects projects={projects} />
    
   
    </>

  )
}

export default HomePage
