import axios from "axios";
import { useEffect, useState } from "react";
import Loader from './Loader';
import Card from "./Card";


const apiUrl = 'https://frontend-cohort-84c1e-default-rtdb.asia-southeast1.firebasedatabase.app/';


function TodoList() {
    
  let [todos, setTodos] = useState([]);


  function fetchTodos(){
    axios.get(`${apiUrl}todos.json`).then(todos=>{
      let tempTodos = []
      for(let key in todos.data){
        let todo = {
          id: key,
        ...todos.data[key]
        }
        
        tempTodos.push(todo);
      }
      setTodos(tempTodos);
    })
  }

  function deleteHandler(id){
    axios.delete(`${apiUrl}todos/${id}.json`).then(()=>{
      fetchTodos();
    })
  }

  useEffect(()=>{
    fetchTodos();
  }, [])

  return (
    <>

      <div className="mt-8">
        {
          todos.map(todo=><Card key={todo.id} title={todo.title} deleteHandler={deleteHandler} id={todo.id} />)
        }
      </div>
    </>
  )
}

export default TodoList;
