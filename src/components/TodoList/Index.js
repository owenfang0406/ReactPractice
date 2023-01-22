import "./styles/index.css";
import React, { useState, useEffect } from 'react';
import Button from "./presentational-components/Button";


function Index() {
    return (
    <><div className="first-div">
        <h1>React 練習專案</h1>
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

export default Index;