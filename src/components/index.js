import "../styles/index.css";
import React, { useState, useEffect } from 'react';
import Button from "./button";


function IndexPage() {
    // const [todos, setTodos] = useState([]);
    // const todosCollection = collection(db, "Todos");
    // useEffect(() => {
    //     const getTodos = async () => {
    //         const resp = await getDocs(todosCollection);
    //         setTodos(resp.docs.map((doc) => (
    //             { ...doc.data(), id: doc.id}     
    //         )))
    //         // const docs = resp.docs.map(doc => {
    //         //     const data = doc.data()
    //         //     data.id =doc.id
    //         //     return data
    //         // })
    //     }
    //     getTodos();
    // },[])
      

    return (
    <><div className="first-div">
        <h1>React 練習專案</h1>
        {/* {todos.map((todo) => {
            return (<div key={todo.id}>
                <h1>{todo.todo}</h1>
            </div>);
        })} */}
        </div>
        <div className="second-div">
            <h4>歡迎光臨我的頁面</h4>
        </div>
        <div className="third-div">
            <Button/>
        </div>
    </>
    )
}

export default IndexPage;