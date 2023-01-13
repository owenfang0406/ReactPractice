import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoList from './pages/todoList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "todoList",
    element: <TodoList/>,
  },
]);

// ReactDOM.render(<RouterProvider router={router}></RouterProvider>, document.querySelector("#root"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();