import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import "./index.css";
import { Link } from "react-router-dom";
import * as test from "react-icons/fa";

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <div className="row flex-row-reverse">
                            <div className="col-auto">
                            <div className="inline">
                            <select className="form-select inline" id="Grade">
                                <option selected value="Gradebook">Gradebook</option>
                                <option value="Change Gradebook">ChangeGradebook</option>
                                <option value="Traditional Gradebook">Traditional Gradebook</option>
                                <option value="Individual Gradebook">Individual Gradebook</option>
                            </select>
                            </div> 
                            <button type="button" className="btn btn-outline-dark rounded mx-1" style={{backgroundColor: "rgb(171, 168, 165)"}}><test.FaDownload/> Import</button>


                            <div className="dropdown inline">
                                <button className="btn btn-outline-dark rounded dropdown-toggle me-1" style={{backgroundColor: "rgb(171, 168, 165)"}} type="button" id="exportmenu" data-bs-toggle="dropdown" aria-expanded="false">
                                    <test.FaUpload/> Export
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="exportmenu">
                                    <li><Link className="dropdown-item" to="#">Export</Link></li>
                                    <li><Link className="dropdown-item" to="#">Export Current Gradebook View</Link></li>
                                    <li><Link className="dropdown-item" to="#">Export Entire Gradebook</Link></li>
                                </ul>
                            </div>
                            <button type="button" className="btn btn-outline-dark rounded py-2 me-1" style={{backgroundColor: "rgb(171, 168, 165)"}}><test.FaCog/></button>

                            </div>
                        </div>

                        <div className="row">

                            <div className="col">
                            <label className="form-label"><b>Student Names</b></label>
                            <div className="input-group">
                            <span className="input-group-text bg-white border-end-0"><test.FaSearch/></span>
                            <input id="Student" placeholder="Search Students" className="form-control border-end-0 border-start-0"/>
                            <span className="input-group-text bg-white border-start-0"><test.FaAngleDown/></span>
                            </div>
                            </div>
                            
                            <div className="col">
                            <label className="form-label"><b>Assignment Names</b></label>
                            <div className="input-group">
                            <span className="input-group-text bg-white border-end-0"><test.FaSearch/></span>
                            <input id="Assignment" placeholder="Search Assignments" className="form-control border-end-0 border-start-0"/>
                            <span className="input-group-text bg-white border-start-0"><test.FaAngleDown/></span>
                            </div>                          
                        </div>
                        <div className="row mt-2 mb-2">
                            <div className="col">
                                <button type="button" className="btn btn-outline-dark rounded" style={{backgroundColor: "rgb(171, 168, 165)"}}><test.FaFilter/> Apply Filters</button>
                            </div>
                        </div>

                        </div>


      <div className="table-responsive table-bordered">
        <table className="table table-striped-custom table-bordered" >
          <thead className="table-light border" style={{backgroundColor:"#f2f2f2"}}>
            <th>Student Name</th>
            {as.map((assignment) => (<th className="center">{assignment.title} <br/> Out of 100</th>))}
          </thead>

          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              console.log(user);
              console.log(assignments);
              return (
                <tr className="center">
                   <td className="left"><span className="redsm">{user?.firstName} {user?.lastName}</span></td>
                   {as.map((assignment) => {
                     const grade = grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;