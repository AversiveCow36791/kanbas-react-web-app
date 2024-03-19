import { Link,useLocation,useParams } from "react-router-dom";
import { FaAngleRight, FaBook, FaBullhorn, FaBullseye, FaCalendar, FaChevronDown, FaClipboard, FaClock, FaCodeBranch, FaCog, FaComments, FaDesktop, FaEnvelopeOpen, FaFile, FaFileAlt, FaFolder, FaGlasses, FaHome, FaPenSquare, FaPlug, FaQuestionCircle, FaRocket, FaShareSquare, FaTachometerAlt, FaTimes, FaUserCircle, FaUsers } from "react-icons/fa";
import "./index.css";
import { courses } from "../../Database";


function MyWebPage () {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    return (
        <>
        <head>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
        </head>
        <nav className="navbar bg-black navbar-dark d-md-none">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="#">{course?.name}</Link>
          <button type="button" className="btn btn-dark transparent" data-bs-toggle="collapse" data-bs-target="#collapsibleNav">
            <span><FaChevronDown/></span>
            <span><FaTimes/></span>
          </button>
          <div className="offcanvas offcanvas-start bg-white" id="collapsibleNavbar">
            <div className="offcanvas-header">
            <img src="/images/canvas.jpg" width="300" height="100" alt="Canvas Image" />
            <button
                type="button"
                className="btn-close text-reset float-end"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
            ></button>            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={`/Kanbas/Dashboard`}><FaTachometerAlt /> Dashboard</Link></li>

              <li className="nav-item">
                <Link to="/Kanbas/Account/Profile/screen.html"><FaUserCircle/> Account                   
                  <span className="float-end a-none-black">
                  <FaAngleRight/>
                  </span></Link>
              </li>

              <li className="nav-item">
                <Link to="/Kanbas/Courses/Home/screen.html"><FaBook/> Courses 
                  <span className="float-end a-none-black">
                  <FaAngleRight/>
                    </span></Link>
              </li>
              
              <li className="nav-item">
                <Link to="#"><FaCalendar/> Calendar</Link>
              </li>

              <li className="nav-item">
                <Link to="#"><FaEnvelopeOpen/> Inbox</Link>
              </li>

              <li className="nav-item">
                  <Link to="#"><FaClock/> History</Link>
              </li>
        
              <li className="nav-item">
                <Link to="#"><FaDesktop/> Studio</Link>
              </li>
        
              <li className="nav-item">
                <Link to="#"><FaShareSquare/> Commons
                  <span className="float-end a-none-black">
                    < FaAngleRight/>
                    {/* {className="ms-2 pd-right"} */}
                    </span></Link>
              </li>
        
              <li className="nav-item">
                <Link to="#"><FaQuestionCircle/> Help <span className="float-end a-none-black">
                  <FaAngleRight/>
                  </span></Link>
                </li>
            </ul>
          </div>

          <div className="collapse navbar-collapse bg-white" id="collapsibleNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={`/Kanbas/Courses/${courseId}/Home`}><FaHome/> Home</Link>
              </li>
              <li className="nav-item wd-active">
                <Link to={`/Kanbas/Courses/${courseId}/Modules`}><FaCodeBranch/> Modules</Link>
              </li>
              <li className="nav-item">
                <Link to="http://piazza.com"><FaPlug/> Piazza</Link>
              </li>
              <li className="nav-item">
                <Link to="#"><FaPlug/> Zoom</Link>
              </li>
              <li className="nav-item">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}><FaPenSquare/> Assignments</Link>
              </li>
              <li className="nav-item">
                <Link to="#"><FaRocket/> Quizzes</Link>
              </li>
              <li className="nav-item">
                <Link to={`/Kanbas/Courses/${courseId}/Grades`}><FaBook/> Grades</Link>
              </li>
              <li className="nav-item">
                <Link to="#"><FaUsers/> People</Link>
              </li>
              <li className="nav-item">
                <Link to="#"><FaPlug/> Panopto Video</Link>
              </li>
              <li className="nav-item">
                <Link to="#"><FaComments/> Discussions</Link>
              </li>
              <li className="nav-item">
                <Link to="#"><FaBullhorn/> Announcements</Link>
              </li>
              <li className="nav-item">
                <Link to="#"><FaFileAlt/> Pages</Link>
              </li>
              <li className="nav-item">
                <Link to="#"><FaFolder/> Files</Link>
              </li>
              <li className="nav-item">
                <Link to="#"><FaClipboard/> Rubrics</Link>
              </li>
              <li className="nav-item">
                <Link to="#"><FaBullseye/> Outcomes</Link>
              </li>
              <li className="nav-item">
                <Link to="#"><i className="fa fa-circle-thin"></i> Collaborations</Link>
              </li>
              <li className="nav-item">
                <Link to="#"><FaFile/> Syllabus</Link>
              </li>
              <li className="nav-item">
                <Link to="/Kanbas/Courses/Settings/screen.html"><FaCog/> Settings</Link>
              </li>
            </ul>
          </div>

        </div>
        
      </nav>
        </>

    );
};

export default MyWebPage;