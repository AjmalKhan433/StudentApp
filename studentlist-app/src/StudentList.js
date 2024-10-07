import React, { useContext } from 'react';
import { StudentContext } from './StudentContext';
import './StudentList.css'; // Ensure you have this import if you're using the grid styles

function StudentList({ setEditableStudent }) {
  const { students, dispatch } = useContext(StudentContext);

  return (
    <div>
      <h2 className='ajmal'>Student List</h2>
      {students.length > 0 ? (
        <div className="student-grid">
          {students.map((student) => (
            <div key={student.id} className="student-item">
              <strong>{student.name}</strong>
              <p>Date of Birth: {student.dob}</p>
              <p>Grade: {student.grade}</p>
              <p>Group: {student.group}</p>
              <p>Phone: {student.phone}</p>
              <p>Address: {student.address}</p>
              <div className="student-actions">
                <button className="medium-button" onClick={() => setEditableStudent(student)}>Edit</button>
                <button className="medium-button" onClick={() => dispatch({ type: 'DELETE_STUDENT', payload: student.id })}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No students available</p>
      )}
    </div>
  );
}

export default StudentList;
