import React from 'react'

export default props =>
  <form onSubmit={(e)=>{e.preventDefault()}}>
    {props.showAddButton && 
            <button id="addToDo" 
            onClick={()=>{props.addToDo(props.input)}}>Add todo</button>}
    <input
      type='text'
      value={props.input}
      onChange={props.onInputChange}
      className="new-todo"
      placeholder="What needs to be done?"/>
  </form>
