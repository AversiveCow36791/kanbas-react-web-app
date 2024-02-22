import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  console.log(modules);
  return (
    <div>
        <div className="align-right p-1 border-bottom pb-2">
                  <button type="button" className="btn btn-outline-dark rounded mx-1">Collapse All</button>
                  <button type="button" className="btn btn-outline-dark rounded mx-1">View Progress</button>
                  <div className="dropdown inline mx-1">
                    <Link className="btn btn-outline-dark dropdown-toggle rounded" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className="text-success"><FaCheckCircle/></span> Publish All
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li><Link className="dropdown-item" to="#">Publish All</Link></li>
                      <li><Link className="dropdown-item" to="#">Unplublish All</Link></li>
                    </ul>
                    </div>        
                  <button type="button" className="btn btn-danger rounded mx-1"><FaPlus/> Modules</button> 
                </div>

                
      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            className="list-group-item p-0 rounded-0">
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>

            {module.lessons?.map((lesson) => (
              <ul className="list-group">
                  <li className="list-group-item p-0 rounded-0">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>

              <ul className="list-group rounded-0 green">
                    <li className="list-group-item p-0" >
                      <FaEllipsisV className="me-2" />
                      <span className="indent">{lesson.description}</span>
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>

              </ul>
              </ul>
              ))}

          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList;

