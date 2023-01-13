import "../styles/index.css"
import React, { useState } from 'react';
import Hello from "./ListPage";
import { Link } from "react-router-dom";

function Button() {

    return (
        <div className="third-div">
            <Link to="/todoList"><button>Click Me</button></Link>
        </div>
    );
}

export default Button;