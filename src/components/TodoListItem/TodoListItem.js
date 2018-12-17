import React from 'react';


function TodoListItem(props){
  return(
    <li>
      <div>{props.todo.title}</div>
      <div>{props.todo.userName}</div>
    </li>
  );
}


export default TodoListItem;
