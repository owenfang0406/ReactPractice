import React, {useState, useEffect} from 'react'
import TodoForm from './TodoForm'
import Todo from './todo'
import { async } from "@firebase/util";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../components/firebased-config";

function List() {

const [todos, setTodos] = useState([])
const todosCollection = collection(db, "Todos");

useEffect(() => {
    const getTodos = async () => {
        const resp = await getDocs(todosCollection);
        setTodos(resp.docs.map((doc) => (
            { ...doc.data(), id: doc.id}     
        )))
    }
    getTodos();
},[])

const addTodo = todo => {
  if(!todo.text || /^\s*$/.test(todo.text)) {
    return
  }

  const newTodo = [todo, ...todos]
  setTodos(newTodo)
  console.log(newTodo)
  console.log(todos)
}

const removeTodo = id => {
  const removeArr = [...todos].filter(todo => todo.id !== id);

  setTodos(removeArr);
}

const updatedTodos = (todoID, newValue) => {
  if(!newValue.text || /^\s*$/.test(newValue.text)) {
    return
  }

  setTodos(prev => prev.map(item => (item.id === todoID ? newValue : item)));

}

const completeTodo = id => {
  let updatedTodos = todos.map(todo => {
    if (todo.id === id) {
      todo.isComplete = !todo.isComplete;
    }
    return todo;
  })
  setTodos(updatedTodos)
}
  return (
    <div className='formContainer'>
        <TodoForm onSubmit={addTodo}></TodoForm>
        <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updatedTodos={updatedTodos}
        ></Todo>
    </div>
  )
}

export default List