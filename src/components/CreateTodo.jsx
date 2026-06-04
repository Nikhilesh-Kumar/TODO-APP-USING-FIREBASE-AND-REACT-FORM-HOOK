import axios from "axios"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";



const apiUrl = 'https://frontend-cohort-84c1e-default-rtdb.asia-southeast1.firebasedatabase.app/';

function CreateTodo() {

  let {register, handleSubmit, reset} = useForm();
  let navigate = useNavigate();
  

  function submitTask(data){
    let task = data.inputTask
    axios.post(`${apiUrl}todos.json`, {
      title: task
    }).then(()=>{
      reset();
      navigate("/todolist");
    })
  }
  

  return (
    <>
      <form action="" onSubmit={handleSubmit(submitTask)}>
        <div className="w-[320px] border border-neutral-300 shadow-md mx-auto mt-8 p-4 rounded-lg">
          <input {...register('inputTask')} className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm outline-none" type="text" placeholder="Enter Task To Save" />
          <input className="items-center bg-black text-white rounded-lg px-2 py-1 mt-3" type="submit" value="Save Task" />
        </div>
      </form>
    </>
  )
}

export default CreateTodo;
