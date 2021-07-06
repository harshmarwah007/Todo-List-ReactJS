import React, { useState } from "react";
import TodoItems from "./TodoItems";
function App() {
  const [inputText, setInputText] = useState();
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    let todotext = event.target.value;
    setInputText(todotext);
  };

  const addTodo = () => {
    setItems((previtems) => [...previtems, inputText]);
    setInputText("");
  };

  const deleteItems = (id) => {
    setItems((previtems) => {
      return previtems.filter((item, index) => {
        return index !== id;
      });
    });

    //console.log(id);
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={handleChange} />
        <button onClick={addTodo}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todo, index) => (
            <TodoItems id={index} text={todo} onChecked={deleteItems} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
