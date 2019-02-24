import React from "react";

function TodoItem({ todo, handleChange }) {
  const completedStyle = {
    textDecoration: "line-through",
    color: "#cdcdcd",
    fontStyle: "italic"
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleChange(todo.id)}
      />
      <p style={todo.completed ? completedStyle : null}>{todo.text}</p>
    </div>
  );
}

export default TodoItem;
