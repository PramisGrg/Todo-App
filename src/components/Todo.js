import React from "react";
import { FontAwesomeIcon } from "@fortawesome/fontawesome-svg-core";

const Todo = () => {
  return (
    <div className="todo">
      <p>Go to school</p>
      <div>
        <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
        <FontAwesomeIcon icon="fa-solid fa-trash" />
      </div>
    </div>
  );
};

export default Todo;
