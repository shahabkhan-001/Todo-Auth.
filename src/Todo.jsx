import React from 'react';
import { Routes, Route } from "react-router-dom";
import TodoApp from './component/TodoApp';
import SignUp from './Routers/SignUpForm';
import Login from './Routers/LoginForm';
import ProtectedRoutes from './ProtectedRoutes';
import './Todo.css';


function Todo() {
  return (
    <>
    <div className='Main-Body'>
    <Routes>
      
      <Route path='/' element={<Login />} />        
      <Route path='/signUp' element={<SignUp />} /> 
      
      
      <Route element={<ProtectedRoutes />}>
        <Route path='/todo' element={<TodoApp />} />                
      </Route>       
    
    </Routes>
    </div>
            
    </>
  );
}

export default Todo;

