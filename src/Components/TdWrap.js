import React, {useState} from 'react'
import { TdForms } from './TdForms'
import {v4 as uuidv4} from 'uuid';
import { Td } from './Td';
import { TdEdit } from './TdEdit';
uuidv4();
export const TdWrap = () => {
    const[todos, setTodos]=useState([])
    const addTodo = todo =>{
        setTodos([...todos,{id:uuidv4(), task:todo, completed:false,isEditing:false}])
        console.log(todos)
    }
    const toggleComplete = id => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, completed:!todo.completed}:todo ))
    }
    const deleteTodo = id => {
      setTodos(todos.filter(todo => todo.id !== id ))
    }
    const editTodo = id => {
      setTodos(todos.map(todo => todo.id === id ? {...todo,isEditing:!todo.isEditing}:todo))
    }
    const editTask = (task,id) => {
      setTodos(todos.map(todo => todo.id === id ?{...todo,task,isEditing:!todo.isEditing}:todo))
    }
  return (
    <div className='TodoWrapper'>
        <h1>Tasks</h1>
        <TdForms addTodo={addTodo} />
        {todos.map((todo,index)=>(
          todo.isEditing?(
          <TdEdit editTodo={editTask} task={todo}/>
        ):(
          <Td task={todo} keys={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
        )
        ))}
        
    </div>
  )
}
