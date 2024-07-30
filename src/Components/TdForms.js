import React, {useState} from 'react'

export const TdForms  = ({addTodo}) => {
    const [value, setValue]=useState("")

    const handleSubmit = e =>{
        e.preventDefault();
        addTodo(value)

        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' placeholder='Enter your task' value={value} onChange={(e)=>setValue(e.target.value)}></input>
        <button type="submit" className='todo-btn'>Add</button>
    </form>
  )
}
