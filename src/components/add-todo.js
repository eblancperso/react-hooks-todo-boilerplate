import React, { useState } from "react";

export const AddTodo = ({ onAddTodoClicked }) => {
  const [value, setValue] = useState("");

  const onFormSubmit = e => {
    e.preventDefault();
    onAddTodoClicked(value);
    setValue("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="My todo title"
      />
    </form>
  );
};
