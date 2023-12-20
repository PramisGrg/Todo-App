import React from "react";
import { useState } from "react";

const Todoform = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form className="todo-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What is your task today ?"
          className="todo-input"
          value={input}
        ></input>
        <button className="todo-btn">Add Task</button>
      </form>
    </div>
  );
};

export default Todoform;
