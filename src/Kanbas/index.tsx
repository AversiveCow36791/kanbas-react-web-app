import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
   return (
     <div className="d-flex">
       <div>
        <KanbasNavigation/>
       </div>
       <div style={{ flexGrow: 1 }}>
         <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element = {<h1>Account</h1>}></Route>
          <Route path="Dashboard" element = {<Dashboard/>}></Route>
          <Route path="Courses/:courseId/*" element={<Courses />} />
          <Route path="Calendar" element = {<h1>Calendar</h1>}></Route>
         </Routes>
       </div>
     </div>
 );}
 export default Kanbas;