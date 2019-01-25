import React, { useState } from "react";
import { Todo } from "./components/todo";
import { AddTodo } from "./components/add-todo";

export const App = () => {
  const [todos, setTodos] = useState([
    {
      title: "Create a todo",
      isCompleted: true
    },
    {
      title: "Create a second todo",
      isCompleted: false
    }
  ]);

  const onAddTodoClicked = title => {
    setTodos([...todos, { title }]);
  };

  const onCompleteTodoToggled = index => {
    const copiedTodos = [...todos];
    copiedTodos[index].isCompleted = !copiedTodos[index].isCompleted;
    setTodos(copiedTodos);
  };

  const onRemoveTodoClicked = index => {
    const copiedTodos = [...todos];
    copiedTodos.splice(index, 1);
    setTodos(copiedTodos);
  };

  return (
    <React.Fragment>
      <ul>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            index={index}
            onCompleteTodoToggled={onCompleteTodoToggled}
            onRemoveTodoClicked={onRemoveTodoClicked}
          />
        ))}
      </ul>
      <AddTodo onAddTodoClicked={onAddTodoClicked} />
    </React.Fragment>
  );
};
