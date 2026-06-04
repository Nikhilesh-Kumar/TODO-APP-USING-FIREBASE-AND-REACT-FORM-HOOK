import CreateTodo from "./components/CreateTodo";
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<TodoList/>} />
        <Route path="/createtodo" element={<CreateTodo />} />
        <Route path="/todolist" element={<TodoList />} />
      </Routes>
    </div>
  )
}

export default App;
