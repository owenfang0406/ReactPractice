import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
const [input, setInput] = useState(props.edit ? props.edit.value : '')
const inputRef = useRef(null)

useEffect(() => {
    inputRef.current.focus()
})
const handleChange = e => {
    setInput(e.target.value)
}
console.log(props);
const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
    });
    setInput("")
}

  return (
    <>
    <form onSubmit={handleSubmit} className='todo-form'>
        {props.edit ? (
        <>
            <input type="text" placeholder="Add a todo" value={input}
            name="text" className="todo-input" onChange={handleChange}
            ref={inputRef}
            ></input>
            <button className='todo-button edit'>Update</button>
        </>
        ) : (
        <>
            <input type="text" placeholder="Add a todo" value={input}
            name="text" className="todo-input" onChange={handleChange}
            ref={inputRef}
            ></input>
            <button className='todo-button'>Add todo</button>
        </>    
        )}
    </form>
    <hr></hr>
    </>
  )
}

export default TodoForm