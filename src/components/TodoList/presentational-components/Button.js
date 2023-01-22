import "../styles/index.css"
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Button() {

    return (
        <div className="third-div">
            <Link to="/todoList"><button>進入系統</button></Link>
        </div>
    );
}

export default Button;