import { Link, useLocation } from "react-router-dom";
import "../../Kanbas/Navigation/index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaEnvelope, FaEnvelopeOpen, FaClock, FaRegClock, FaUserClock, FaDesktop, FaShareSquare, FaQuestionCircle } from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: "N"},
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox", icon: <FaEnvelopeOpen className="fs-2"/>},    
    { label: "History", icon: <FaRegClock className="fs-2"/> },
    { label: "Studio", icon: <FaDesktop className="fs-2" />},
    { label: "Commons", icon: <FaShareSquare className="fs-2"/>},
    { label: "Help", icon: <FaQuestionCircle className="fs-2"/>},
    ];
  const { pathname } = useLocation();
  return (
    <div className="d-none d-md-block">
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
    </div>
  );
}
export default KanbasNavigation;


/* <ul class="wd-kanbas-navigation">
<li><a href=#>N</a></li>

<li><a href="/Kanbas/Account/Profile/screen.html"><i class="fa fa-user-circle-o"></i>Account</a></li>

<li class="wd-active">
    <a href="/Kanbas/Dashboard/screen.html"><i class="fa fa-tachometer"></i>Dashboard</a></li>

<li><a href="/Kanbas/Courses/Home/screen.html"><i class="fa fa-book"></i>Courses</a></li>

<li><a href="#"><i class="fa fa-calendar"></i>Calendar</a></li>

<li><a href="#"><i class="fa fa-envelope-open-o"></i></br>Inbox</a></li>

<li><a href="#"><i class="fa fa-clock-o" aria-hidden="true"></i>History</a></li>

<li><a href="#"><i class="fa fa-desktop"></i>Studio</a></li>

<li><a href="#"><i class="fa fa-share-square-o"></i>Commons</a></li>

<li><a href="#"><i class="fa fa-question-circle-o"></i><br/>Help</a></li>
</ul> */