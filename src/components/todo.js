import React from "react";

export const Todo = ({
  todo,
  index,
  onCompleteTodoToggled,
  onRemoveTodoClicked
}) => (
  <li style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
    {todo.title}
    <button onClick={() => onCompleteTodoToggled(index)}>Complete</button>
    <button onClick={() => onRemoveTodoClicked(index)}>Delete</button>
  </li>
);
