

const Project = ({project}) => {
  return (
    <div className="flex flex-col gap-4 mx-4 hover:bg-slate-50 justify-center items-center rounded-lg shadow-md p-4">
      
  
      <img src={project.picture} alt="" className="w-1/2"/>
      <h2 className="lato-bold">
      {project.title}
      </h2>
      
      <p>
        {project.description}
      </p>
    </div>
  )
}

export default Project
