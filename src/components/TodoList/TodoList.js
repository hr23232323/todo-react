import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';


function TodoList(props){
  function renderTodoItem(todo){
    return (
      <TodoListItem todo = {todo} key = {todo.id}></TodoListItem>
    );
  }

  return (
    <div className="todo-list">
      <ul>
        {props.todos.map(renderTodoItem)}
      </ul>
    </div>
  );
}

export default TodoList
