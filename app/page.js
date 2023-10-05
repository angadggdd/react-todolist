"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, { title, desc }])
    settitle("")
    setdesc("")
    console.log(mainTask)

  }
  const delateHandler = (i) =>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
  }


  let renderTask = <h2>No Task Available</h2>
 
   if (mainTask.length>0) {
    renderTask = mainTask.map((t, i) => {
      return(
      <li key={i} className='flex items-center justify-between'>
        <div className ='flex justify-between mb-5'>
          <h5 className='text-xl font-semibold'> {t.title} </h5>
          <h6 className='text-xl font-semibold'>{t.desc}</h6>
        </div>
        <button onClick={()=>{
          delateHandler(i)
        }} className='bg-green-400 rounded'>Delete</button>
      </li>)
    })
   }
 
  return (
    <>
      <h1 className='bg-black text-white p-5 
        text-xl font-bold text-center'>Angad's Todo list</h1>

      <form onSubmit={submitHandler}>
        <input type="text" className='text-xl
         border-zinc-800 border-4 m-3 px-4 py-2 rounded'
          placeholder='Enter Task here'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }} />
        <input type="text" className='text-xl
         border-zinc-800 border-4 m-3 px-4 py-2 rounded'
          placeholder='Enter Description here'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }} />
        <button className='bg-black text-white m-3 px-4 py-2 text-xl rounded ' >Add Task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>

    </>
  )
}

export default page
