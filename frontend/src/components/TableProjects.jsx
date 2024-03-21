import RecordProject from "./RecordProject"


const TableProjects = ({projects}) => {
  return (
    <table className="table-auto my-4">
     <thead>
        <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Pic</th>
            <th colSpan={2}>Actions</th>
        </tr>
     </thead>
     <tbody>
       {projects.map((project)=>{

        return (
            <>
            <tr>
                <RecordProject project={project} />
            </tr>
            
            </>
        )
       })}

     </tbody>

    </table>
  )
}

export default TableProjects