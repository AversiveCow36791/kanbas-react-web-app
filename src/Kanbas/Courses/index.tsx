import { courses } from "../../Kanbas/Database";
import { Navigate, Routes, Route, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { Link,useLocation } from "react-router-dom";
import "../../Kanbas/Courses/index.css";
import CourseNavigation from "./Navigation";
import { FaGlasses } from "react-icons/fa";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import path from "path";
import AssignmentEditor from "./Assignments/Editor";
import { assignments } from "../../Kanbas/Database";
import Grades from "./Grades";


function Courses() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const { pathname } = useLocation();

    var pathValues = pathname.split('/');
    var breadcrumb = pathValues[4];
    
    if(pathValues.length == 6){
    
      const assignmentList = assignments.filter(
        (assignment) => assignment._id === pathValues[5]);
        breadcrumb = "Assignments > " + assignmentList.map((assignment) => assignment.title);
    }    

    return (
      <div>
        
        <div className="d-none d-md-block">
        <nav aria-label="breadcrumb" className="border-bottom d-flex justify-content-between custom-breadcrumb ms-3">
        <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item text-danger"><HiMiniBars3/> <Link className="a-none-red ms-2" to="#">{course?.number} {course?.name} </Link></li>
            <li className="breadcrumb-item active" aria-current="page">{breadcrumb}</li>
        </ol>
        <button className="btn btn-light btn-outline-dark mb-1 rounded"><Link to="#" className="a-none-black"><FaGlasses /> Student View</Link></button>
        </nav>
        </div>
        <CourseNavigation />
        
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "250px", top: "50px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>

      </div>
    );
  }
  export default Courses;
  

