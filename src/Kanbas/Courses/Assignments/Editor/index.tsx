import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import * as testvariable from "react-icons/fa";
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment,
  } from "../assignmentsReducer";
  import { KanbasState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import * as db from "../../../Database";

function AssignmentEditor() {
    const { assignmentId, courseId } = useParams();
    // const [assignments,setAssignments] = useState(db.assignments);
    // const [assignment,SetAssignment] = useState(assignments.find((assignment) => assignment._id === assignmentId));
    const assignments = useSelector((state: KanbasState) =>
        state.assignmentsReducer.assignments);
    // const [assignments,setAssignments] = useState(db.assignments);
    // const [assignments,setAssignments] = useState(db.assignments);
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    console.log(assignment);
    //const { courseId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        if (assignment) {
            // Update existing assignment
            dispatch(updateAssignment(assignment));
        } else {
            dispatch(addAssignment({assignment, course: courseId }));
        }
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

  return (
    <div>

<div className="row flex-grow-1">
                <div className="col flex-grow-1">
                </div>
                <div className="col flex-grow-2 mb-1" >
                    <span className="float-end">
                    <span className="pe-2" style={{color:"green"}}><testvariable.FaCheckCircle/> Published</span>
                    <div className="dropdown" style={{display: "inline"}}>
                        <button type="button" className="btn btn-outline-dark rounded" style={{backgroundColor:"lightgray"}} data-bs-toggle="dropdown">
                            <testvariable.FaEllipsisV/>
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="#">Edit Assignment Dates</Link></li>
                        </ul>
                    </div>
                    </span>
                </div>
            </div>

<div className="row py-1"><hr/></div>

<div className="row">
                                           
                                <form>
                                    <div className="row">
                                        <div className="col">
                                        <label className="form-label">Assignment Name</label>
                                        <input className="form-control" type="text" value={assignment?.title} onChange={(e) => dispatch(setAssignment({...assignment,title:e.target.value}))} id="wd-assignment-name"/>
                                        </div>
                                    </div>
                                    
                                    <div className="row my-2">
                                        <div className="col">
                                        <textarea className="form-control py-2" value={assignment?.description} onChange={(e) => dispatch(setAssignment({...assignment,description:e.target.value}))} ></textarea>
                                        </div>
                                    </div>

                                    <div className="row my-2">
                                        <div className="col-3 d-flex flex-row-reverse align-items-center pe-0 px-0 mb-1"><label htmlFor="wd-points" className="form-label ">Points</label></div>
                                        <div className="col-5 px-0 ms-1"><input type="text" className="form-control" value={assignment?.points} onChange={(e) => dispatch(setAssignment({...assignment,points:e.target.value}))} id="wd-points"/></div>
                                    </div>

                                    <div className="row my-2">
                                        <div className="col-3 d-flex flex-row-reverse align-items-center pe-0 px-0 mb-1"><label htmlFor="Assignment Group" className="form-label">Assignment Group</label></div>
                                        <div className="col-5 px-0 ms-1"><select className="form-select" id="Assignment Group">
                                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                                        </select></div>
                                    </div>

                                    <div className="row my-2">
                                        <div className="col-3 d-flex flex-row-reverse align-items-center pe-0 px-0 mb-1"><label htmlFor="Display" className="form-label">Display Grade as</label></div>
                                        <div className="col-5 px-0 ms-1"><select id="Display" className="form-select">
                                            <option selected value="Percentage">Percentage</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className="row my-2">
                                        <div className="col-3 d-flex flex-row-reverse align-items-center pe-0 px-0 mb-1"></div>
                                        <div className="col-5 px-0 ms-1">

                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="y" id="dont"/>
                                                <label className="form-check-label" htmlFor="dont">
                                                    Don't count this assignment towards final grade
                                                </label>
                                            </div>                                    
                                    </div>
                                    </div>

                                    <div className="row my-2">
                                        <div className="col-3 d-flex flex-row-reverse align-items-center pe-0 "><label htmlFor="Submission" className="form-label">Submission Type</label>
                                        </div>
                                        <div className="col-5 px-0 ms-1"><select id="Submission" className="form-select">
                                            <option selected value="Online">Online</option>
                                        </select>
                                    </div>
                                    </div>

                                    <div className="row my-2">
                                        <div className="col-3 d-flex flex-row-reverse align-items-center pe-0 px-0 mb-1"></div>
                                        <div className="col-5 px-0 ms-1">
                                            <label htmlFor="Entry Options">Online Entry Options</label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="Text" id="Text"/>
                                                <label className="form-check-label" htmlFor="Text">
                                                    Text Entry
                                                </label>
                                              </div>
                                              <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="Web" id="Web"/>
                                                <label className="form-check-label" htmlFor="Web">
                                                    Website URL
                                                </label>
                                              </div>
                                              <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="Media" id="Media"/>
                                                <label className="form-check-label" htmlFor="Media">
                                                    Media Recordings
                                                </label>
                                              </div>
                                              <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="Student" id="Student"/>
                                                <label className="form-check-label" htmlFor="Student">
                                                    Student Annotation
                                                </label>
                                              </div>
                                              <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="File" id="File"/>
                                                <label className="form-check-label" htmlFor="File">
                                                    File Uploads
                                                </label>
                                              </div>
                                        </div>

                                    </div>

                                    <div className="row my-2">
                                        <div className="col-3 d-flex flex-row-reverse align-items-center pe-0 px-0 mb-1"></div>
                                        <div className="col-5 px-0 ms-1">
                                            <label htmlFor="Group Assignments">Group Assignments</label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="yes" id="yes"/>
                                                <label className="form-check-label" htmlFor="gyes">
                                                    Enable
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="no" id="gno"/>
                                                <label className="form-check-label" htmlFor="gno">
                                                    Disable
                                                </label>
                                            </div>                                      
                                    </div>

                                    </div>
                                    <div className="row my-2">
                                        <div className="col-3 d-flex flex-row-reverse align-items-center pe-0 px-0 mb-1"></div>
                                        <div className="col-5 px-0 ms-1">
                                            <label htmlFor="Group Assignments">Peer Reviews</label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="yes" id="pyes"/>
                                                <label className="form-check-label" htmlFor="pyes">
                                                    Enable
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="no" id="pno"/>
                                                <label className="form-check-label" htmlFor="pno">
                                                    Disable
                                                </label>
                                            </div>                                      
                                    </div>
                                    </div>


                                    <div className="row mt-1">
                                        <div className="col-3 d-flex flex-row-reverse pe-1 px-0 mb-1">Assign</div>
                                        <div className="col-5 px-0 rounded-top border ms-1">

                                <label className="p-1"><b>Assign to</b></label>
                                <div className="col-6 py-1 px-1 border ms-1 p-1">    
                                    <button className="btn btn-outline-dark" type="button" style={{backgroundColor:"lightgray"}}>Everyone <testvariable.FaTimes/></button>
                                </div>

                                <div className="col p-1">
                                <label htmlFor="due" className="form-label"><b>Due</b></label>
                                <input type="date" id="due" className="form-control mt-0 mb-1 ps-1" value="2024-03-04"/>
                                </div>

                                <div className="col p-1">
                                <div className="row">
                                    <div className="col"><label htmlFor="Availability" className="form-label"><b>Available from</b></label>
                                    <input type="date" id="Availability" className="form-control" value={assignment?.availableFromDate} onChange={(e) => dispatch(setAssignment({...assignment,availableFromDate:e.target.value}))}/></div>
                                
                                    <div className="col"><label htmlFor="Until" className="form-label"><b>Until</b></label>
                                    <input type="date" id="Until" className="form-control" value={assignment?.availableUntilDate} onChange={(e) => dispatch(setAssignment({...assignment,availableUntilDate:e.target.value}))}/></div>
                                </div>
                                </div>
                                    </div>
                                    </div>
                                <div className="row mt-0">
                                    <div className="col-3 d-flex flex-row-reverse pe-1 px-0 mb-1"></div>
                                        <div className="col-5 px-0 rounded-bottom border ms-1 p-2 light-gray text-center"> + Add </div>
                                </div>
                                <hr/>
                                <div className="row m-1">
                                    <div className="col">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="yes" id="notifyes"/>
                                            <label className="form-check-label" htmlFor="notifyes">
                                                Notify users that content has changed
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col">
                                    <button onClick={handleSave} className="btn btn-success ms-2 float-end">
                                            Save
                                        </button>
                                        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                                                className="btn btn-danger float-end">
                                            Cancel
                                        </Link>
                                </div>
                                </div>
                
                                
                                
                                </form>
                                
                            </div>

    </div>

    

  );
}
export default AssignmentEditor;
