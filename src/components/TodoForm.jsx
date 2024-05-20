import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentsChange = (e) => {
    setContents(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !contents) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }
    addTodo(title, contents);
    setTitle("");
    setContents("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="제목을 입력해주세요!"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        placeholder="내용을 입력해주세요!"
        value={contents}
        onChange={handleContentsChange}
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default TodoForm;
