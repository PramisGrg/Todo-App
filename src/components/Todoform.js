import React from "react";
import { useState } from "react";

const Todoform = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(" ");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="todo-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What is your task today ?"
        className="todo-input"
        onChange={handleChange}
        value={input}
      ></input>
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default Todoform;
