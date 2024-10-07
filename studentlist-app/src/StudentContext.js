import React, { createContext, useReducer, useEffect } from 'react';

export const StudentContext = createContext();

const initialState = JSON.parse(localStorage.getItem('students')) || [];

const studentReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_STUDENT':
      return [...state, { ...action.payload, id: Date.now() }];
    case 'EDIT_STUDENT':
      return state.map((student) =>
        student.id === action.payload.id ? action.payload : student
      );
    case 'DELETE_STUDENT':
      return state.filter((student) => student.id !== action.payload);
    default:
      return state;
  }
};

export const StudentProvider = ({ children }) => {
  const [students, dispatch] = useReducer(studentReducer, initialState);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  return (
    <StudentContext.Provider value={{ students, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};
