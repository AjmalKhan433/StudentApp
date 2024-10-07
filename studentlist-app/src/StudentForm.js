import React, { useState, useEffect, useContext } from 'react';
import { StudentContext } from './StudentContext';
import './StudentForm.css'; // Ensure you import the CSS file

function StudentForm({ editableStudent, setEditableStudent }) {
  const { dispatch } = useContext(StudentContext);
  const [formState, setFormState] = useState({
    name: '',
    dob: '',
    grade: '',
    group: '',
    phone: '',
    address: ''
  });

  useEffect(() => {
    if (editableStudent) {
      setFormState(editableStudent);
    } else {
      // Set today's date in the format YYYY-MM-DD
      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0];
      setFormState((prevState) => ({ ...prevState, dob: formattedDate }));
    }
  }, [editableStudent]);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editableStudent) {
      dispatch({ type: 'EDIT_STUDENT', payload: formState });
    } else {
      dispatch({ type: 'ADD_STUDENT', payload: formState });
    }
    setFormState({
      name: '',
      dob: '',
      grade: '',
      group: '',
      phone: '',
      address: ''
    });
    setEditableStudent(null);
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <div className="form-grid">
        <div className="form-column">
          <input type="text" name="name" value={formState.name} onChange={handleChange} placeholder="Student Name" required />
          <input type="date" name="dob" value={formState.dob} onChange={handleChange} required />
          <input type="text" name="grade" value={formState.grade} onChange={handleChange} placeholder="Grade" required />
        </div>
        <div className="form-column">
          <input type="text" name="group" value={formState.group} onChange={handleChange} placeholder="Group" required />
          <input type="tel" name="phone" value={formState.phone} onChange={handleChange} placeholder="Phone Number" required />
          <input type="text" name="address" value={formState.address} onChange={handleChange} placeholder="Address" required />
        </div>
      </div>
      <button type="submit" className='ajju4'>{editableStudent ? 'Update' : 'Add'} Student</button>
    </form>
  );
}

export default StudentForm;
