import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import ToDoList from "./ToDoList";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [itmes, setItems] = useState([]);

  const listItem = (event) => {
    console.log(event.target.value);
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((olditems) => {
      return [...olditems, inputList];
    });
    setInputList("");
  };

  
  const deleteItmes = (id) =>{
    setItems((olditems) => {
      return olditems.filter((array,index)=>{
        return index !== id;
      })
    });
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add Items" onChange={listItem} 
          value={inputList}
          />
          <button onClick={listOfItems}> + </button>

          <ol>
            {/* <li> {inputList} </li>*/}

            {itmes.map((itemVal,index) => {
             return <ToDoList key={index} id={index} text={itemVal}
             onSelect={deleteItmes} />
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
