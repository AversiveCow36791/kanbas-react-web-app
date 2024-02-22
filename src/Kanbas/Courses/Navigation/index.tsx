import { useParams } from "react-router-dom";
import { courses } from "../../Database";
import { Link, useLocation } from "react-router-dom";
import "./index.css";


function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Grades", "Assignments","People","Panopto-Video","Discussions","Announcements","Pages","Files","Rubrics","Outcomes","Collaborations","Syllabus","Settings","Zoom","Quizzes"];
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  return (
    
    <div className="d-none d-md-block">

    <p className="smallest ms-2 mt-2"><em>{course?.startDate} {course?.number}</em></p>

    <ul className="wd-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
          <Link to={link}>{link}</Link>
        </li>
      ))}
    </ul>

    </div>
  );
}
export default CourseNavigation;