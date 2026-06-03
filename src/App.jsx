import axios from "axios"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Card from "./components/Card";


const apiUrl = 'https://frontend-cohort-84c1e-default-rtdb.asia-southeast1.firebasedatabase.app/';

function App() {
  let [todos, setTodos] = useState([]);
  let {register, handleSubmit, reset} = useForm();

  

  function submitTask(data){
    let task = data.inputTask
    axios.post(`${apiUrl}todos.json`, {
      title: task
    }).then(()=>{
      fetchTodos();
      reset();
    })
    
  }
  

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
      <form action="" onSubmit={handleSubmit(submitTask)}>
        <div className="w-[320px] border border-neutral-300 shadow-md mx-auto mt-8 p-4 rounded-lg">
          <input {...register('inputTask')} className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm outline-none" type="text" placeholder="Enter Task To Save" />
          <input className="items-center bg-black text-white rounded-lg px-2 py-1 mt-3" type="submit" value="Save Task" />
        </div>
      </form>

      <div className="mt-8">
        {
          todos.map(todo=><Card key={todo.id} title={todo.title} deleteHandler={deleteHandler} id={todo.id} />)
        }
      </div>
    </>
  )
}

export default App;
