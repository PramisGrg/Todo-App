import React from "react";

const Todoform = () => {
  return (
    <div>
      <div className="todo-container">
        <form className="todo-form">
          <input
            type="text"
            className="todo-input"
            placeholder="What is your task today ?"
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
