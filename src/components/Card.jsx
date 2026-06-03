import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { CiTrash  } from "react-icons/ci";
import Loader from './Loader';


function Card({title, deleteHandler, id}) {

  let {handleSubmit} = useForm();
  let [deleteStatus, setDeleteStatus] = useState(false);

  function deleteTask(){
    deleteHandler(id);
    setDeleteStatus(!deleteStatus);
  }

  return (
    <>
        <form action="" onSubmit={handleSubmit(deleteTask)}>
          <div className='w-[320px] border border-neutral-400 px-4 py-1 mb-1 mx-auto rounded-lg hover:shadow-lg'>
            <div className="flex items-center justify-between">
              <p>{title}</p>
              <button type='submit' className='text-neutral-500 hover:text-red-700' type="submit">{deleteStatus ? <Loader/> : <CiTrash />}</button>
            </div>
          </div>
        </form>
    </>
  )
}

export default Card;
