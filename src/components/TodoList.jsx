// src/components/TodoList.js
import React from 'react';
import Button from './Button';

function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <span onClick={() => onToggleTodo(todo.id)}>{todo.text}</span>
          <Button onClick={() => onDeleteTodo(todo.id)} text="Delete" className="delete-button" />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;