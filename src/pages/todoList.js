 import React from "react";
 import "../styles/todoList.css";
import List from "./list";
import { useNavigate } from 'react-router-dom';


 function TodoList() {
    const navigate = useNavigate()

    function GoBack(){
        navigate("/");
    }

    return(
        <>
        <div className="inputArea">
            <List></List>
        </div>
        <div className="goBackBox">
            <button onClick={GoBack}>返回首頁</button>
        </div>
        </>
    )
 }

 export default TodoList
