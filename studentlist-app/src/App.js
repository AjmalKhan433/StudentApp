import React, { useState, useEffect } from 'react';
import StudentForm from './StudentForm';
import StudentList from './StudentList';
import { StudentProvider } from './StudentContext';
import './App.css'

function App() {
  const [editableStudent, setEditableStudent] = useState(null);

  useEffect(() => {
    console.log('App component mounted');
  }, []);

  return (
    <StudentProvider>
      <div className="App">
        <h1 className='ajju'>Student Management System</h1>
        <StudentForm editableStudent={editableStudent} setEditableStudent={setEditableStudent} />
        <StudentList setEditableStudent={setEditableStudent} />
      </div>
    </StudentProvider>
  );
}

export default App;
