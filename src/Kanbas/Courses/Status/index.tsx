import { Link,useParams } from "react-router-dom";
import { FaBan,FaCheckCircle,FaBullseye,FaBullhorn,FaExclamation, FaCalendar, FaBell, FaFile, FaChartBar, FaUpload } from "react-icons/fa";
import "../index.css";
import "./try.css";
import { assignments } from "../../Database";
import { useSelector } from "react-redux";
import { KanbasState } from "../../store";

function Status() {

  const { courseId } = useParams();
const assignmentList = useSelector((state: KanbasState) => 
  state.assignmentsReducer.assignments)
  .filter(
    (assignment) => assignment.course === courseId)
    ;

return (
<div className="d-none d-xl-block">
<h5>Course Status</h5><hr/>

<div className="btn-group" style={{width:"100%",minHeight:50}} role="group" aria-label="Basic example">
  <button type="button" className="btn btn-outline-dark rounded"><FaBan/> Unpublish</button>
  <button type="button" className="btn btn-success rounded green-btn" disabled><FaCheckCircle/> Published</button>
</div>

<br/>
<ul className="wd-course-status">

    <li><button type="button" className="btn btn-outline-dark rounded gray"><FaFile/> Importing Existing Content</button></li>
    <li><button type="button" className="btn btn-outline-dark rounded gray" ><FaUpload/> Import From Commons</button></li>
    <li><button type="button" className="btn btn-outline-dark rounded gray" ><FaBullseye/> Choose Home Page</button></li>
    <li><button type="button" className="btn btn-outline-dark rounded gray" ><FaChartBar/> View Course Stream</button></li>
    <li><button type="button" className="btn btn-outline-dark rounded gray" ><FaBullhorn/> New Announcement</button></li>
    <li><button type="button" className="btn btn-outline-dark rounded gray" ><FaChartBar/> New Analytics</button></li>
    <li><button type="button" className="btn btn-outline-dark rounded gray" ><FaBell/> View Course Notifications</button></li>
</ul>

<div className="container">
  <div className="row">
    <div className="col mb-2">
      <p className="fs-6">To Do</p> <hr/>
  <ul className="wd-comming">
      {assignmentList.map((assignment) => (
      <li><Link className="a-none-red" to={`/Kanbas/Courses/${courseId}/Assignments`}><FaExclamation/> {assignment.title}</Link></li>))}
  </ul>
  </div>


<div className="container m-1 p-0">
  <div className="row p-0 m-0">
    <div className="col mt-1 me-1 pb-0">
      <p className="fs-6">Comming Up</p>
    </div>
      <div className="col a-small-right mt-3 ps-2"><Link to="#" className="a-none-red"> <FaCalendar/> View Calendar</Link></div>
      <hr/>
    </div>
  <ul className="wd-comming">
      <li><Link className="a-none-red" to="#"><FaCalendar/>   Lecture 1</Link></li>
      <li><Link className="a-none-red" to="#"><FaCalendar/>   Lecture 2</Link></li>
      <li><Link className="a-none-red" to="#"><FaCalendar/>   Lecture 3</Link></li>
  </ul>
</div>
</div>
</div>
</div>);

}

export default Status;