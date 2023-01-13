import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './todo'

function List() {
const [todos, setTodos] = useState([])
const addTodo = todo => {
  if(!todo.text || /^\s*$/.test(todo.text)) {
    return
  }

  const newTodo = [todo, ...todos]
  setTodos(newTodo)
  console.log(...todos)
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