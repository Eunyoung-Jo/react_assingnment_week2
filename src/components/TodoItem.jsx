import React from "react";

function TodoItem({ todo, toggleStatus, removeTodo, buttonText }) {
  return (
    <li className="todo-item">
      <div className="todo-details">
        <span className="todo-title">제목: {todo.title}</span>
        <span className="todo-contents">내용: {todo.contents}</span>
      </div>
      <div className="todo-actions">
        <button onClick={() => toggleStatus(todo.id)}>{buttonText}</button>
        <button onClick={() => removeTodo(todo.id)}>삭제</button>
      </div>
    </li>
  );
}

export default TodoItem;
