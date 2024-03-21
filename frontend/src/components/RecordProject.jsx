import { Link } from "react-router-dom"


const RecordProject = ({project}) => {
  return (
    <>
    <td className="p-4">{project.title}</td>
    <td className="p-4">{project.description}</td>
    <td><img src={project.picture} alt="" className="w-1/2" /></td>
    <td className="p-4">  <Link to={'/editProject'}  className="bg-blue-500 rounded px-4 py-2 ">Edit</Link>  </td>
    <td className="p-4">   
        <form>
            <button className="bg-red-500 rounded px-4 py-2 ">Delete</button>
        </form>
    </td>
    </>
  )
}

export default RecordProject
