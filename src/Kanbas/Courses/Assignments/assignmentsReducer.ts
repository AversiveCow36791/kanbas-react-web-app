import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../Database";
import { useParams } from "react-router";

const initialState = {
    assignments: db.assignments,
    assignment: {   title: "New Assignment 123", course:"1234",points: 100, dueDate: "2022-12-31", description: "New Description", availableFromDate: "2022-12-31", availableUntilDate: "2022-12-31"},
}

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            const courseId = action.payload.courseId; 
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString(), course: courseId},
                ...state.assignments,
            ];
        },
        
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },

        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },

        setAssignment: (state, action) => {
            state.assignment = action.payload;
        },
    } 
});

export const { addAssignment, deleteAssignment, updateAssignment, setAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;