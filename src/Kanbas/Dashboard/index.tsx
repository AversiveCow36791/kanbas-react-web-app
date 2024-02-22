import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import { NONAME } from "dns";

function Dashboard() {
    return (
        <div className="p-4">
        <h1>Dashboard</h1> <hr />
        <h2 className="ps-2">Published Courses (7)</h2> <hr />
        <div className="row flex-wrap pt-0" style= {{marginBottom: 30}}>
          <div className="row row-cols-1 row-cols-md-5 g-4 mt-0">
            {courses.map((course) => (
            <div key={course._id} className="col" style= {{width: 300 }} >
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                     style= {{maxHeight: 150}}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                     style= {{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                     {course.number} {course.name}</Link>
                  <p className="card-text">{course.name}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary"> Go </Link>
                </div> 
              </div>
            </div>
            ))}
        </div>
    </div>
    </div>
    );
}


export default Dashboard;

