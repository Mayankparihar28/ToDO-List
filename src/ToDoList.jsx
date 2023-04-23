import React from "react";
import ReactDOM from "react-dom";
import './App.css';

const ToDoList = (props) => {


  return(<>
    <div className="todo_style">
    <i className="fa fa-times" aria-hidden="true"
    onClick={()=>{
      props.onSelect(props.id);
    }}
    >
     <li> {props.text} </li>
     </i>
     </div>
  </>)
};

export default ToDoList;