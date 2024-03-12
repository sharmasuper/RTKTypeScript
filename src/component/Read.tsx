import { NavLink } from "react-router-dom";
import { useDeleteStudentsMutation, useGetStudentsQuery } from "../Feature/StudentSlices";

function Read() {

    const {data:students,isSuccess,isError,error,isLoading} = useGetStudentsQuery(2)
   
    const [deleteStudents] = useDeleteStudentsMutation()
     
    
      
  return (
    <div className="container-fluid">
     <div className="row">
        {isLoading&& <span>Loading...</span>}
        {isError&&<span> something went wrong</span>}
        {isSuccess&&students?.map((student)=>{
         return   <div className="col-4" key={student.id}>
                  <h2>{student.title}</h2>
                  <h6>{student.body}</h6>
                  <h1>id -- {student.id}</h1>
                  <button onClick={()=>deleteStudents(student?.id)}>Delete</button>

                  <button className="card-link">
                   <NavLink to={`edit/${student?.id}`}>Edit</NavLink>
                  </button>

            </div>
        })}
     </div>
    </div>
  );
}

export default Read;

