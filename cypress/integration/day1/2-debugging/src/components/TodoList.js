import React from 'react'

const TodoItem = props => 
  <li>
    <div className="view">
      <label>
        {props.todo}
      </label>
    </div>
  </li>

export default props =>
  <ul className="todo-list">
    {props.todos.map((todo, index) => <TodoItem key={index} todo={todo} index={index}/>)}
  </ul>
