import React from "react";
import { useState } from "react";

const Todoform = () => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
  };

  return (
    <div>
      <div className="todo-container" onSubmit={handleSubmit}>
        <form className="todo-form">
          <input
            type="text"
            className="todo-input"
            placeholder="What is your task today ?"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          ></input>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default Todoform;
