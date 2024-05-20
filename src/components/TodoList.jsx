import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleStatus, removeTodo, title, buttonText }) {
  return (
    <div className="todo-section">
      <h2>{title}</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleStatus={toggleStatus}
            removeTodo={removeTodo}
            buttonText={buttonText}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
