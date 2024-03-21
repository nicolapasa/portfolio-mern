import Project from "./Project"


const Projects = ({projects}) => {
  return (
    <div className="container mx-auto flex flex-col gap-4 justify-center items-center my-4 sm:py-32 py-16">
        <h2 className="text-2xl  lato-bold">Projects</h2>

         <div className="sm:grid sm:grid-cols-3 flex flex-col mx-auto">
              {
                projects &&
                projects.map((project)=>{

                    return (
                        <>
                        <Project project={project} />
                        </>
                    )
                })
              }
         </div>  

    </div>
  )
}

export default Projects