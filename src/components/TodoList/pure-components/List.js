import React, {useState, useEffect} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import { async } from "@firebase/util";
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase-config";


function List() {

const [todos, setTodos] = useState([])
const todosCollection = collection(db, "Todos");
const getTodos = async () => {
  const resp = await getDocs(todosCollection);
  
  setTodos(resp.docs.map((doc) => (
      { ...doc.data(), id: doc.id }     
  )))
}
useEffect(() => {
    getTodos();
},[])

const createTodo = async (todo) => {
  await addDoc(todosCollection,{text: todo.text} )
}

const deleteTodo = async (id) => {
  const todoDoc = doc(db, "Todos", id);
  await deleteDoc(todoDoc)
}
const updateTodo = async (id ,newValue) => {
  const newUpdates = {text: newValue.text};
  const todoDoc = doc(db, "Todos", newValue.id);
  await updateDoc(todoDoc, newUpdates);
}

const addTodo = todo => {
  if(!todo.text || /^\s*$/.test(todo.text)) {
    return
  }
  createTodo(todo)
  const newTodo = [todo, ...todos]
  setTodos(newTodo)
  getTodos()
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
        onUpdate={updateTodo}
        onDelete={deleteTodo}
        ></Todo>
    </div>
  )
}

export default List