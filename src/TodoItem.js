import React from 'react';

const TodoItem = ({ todo, onDeleteTodo }) => {
  const handleDelete = () => {
    onDeleteTodo(todo.id);
  };

  return (
    <li>
        <h4>{todo.title}</h4>
        <p>{todo.body}</p>
        <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;