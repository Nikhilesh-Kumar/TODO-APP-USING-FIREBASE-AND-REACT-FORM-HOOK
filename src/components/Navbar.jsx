import React from 'react'
import { Link } from 'react-router-dom';
import CreateTodo from './CreateTodo';
import TodoList from './ToDoList';



function Navbar() {
  return (
    <div className='bg-black text-white font-bold py-2 flex justify-between m-0'>
      <Link className='mx-12' to="/">Welcome to TODO APP</Link>
      <div className="flex gap-16 mx-12">
        <Link to="/createtodo">Create ToDo</Link>
        <Link to="/todolist">My Task</Link>
      </div>
    </div>
  )
}

export default Navbar;
