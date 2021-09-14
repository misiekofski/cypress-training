import React, {Component} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default class TodoApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [],
      showAddButton: false,
      input: ''
    }

    this.toggleShowButton = this.toggleShowButton.bind(this)
    this.addToDo = this.addToDo.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }

  toggleShowButton () {
    setTimeout(()=>{
      this.setState({
        showAddButton: !this.state.showAddButton
      })
    }, 300)
  }

  addToDo (todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  onInputChange (event) {
    this.setState({
      input: event.target.value
    })
  }

  render () {
    return (
      <div>
        <header className="header">
          <h1>todos</h1>
          <button id="showAddTodoButton" onClick={this.toggleShowButton}>Click me!</button>
          {this.state.todos.length > 1 && <input />}
          <TodoForm
            showAddButton={this.state.showAddButton}
            input={this.state.input}
            onInputChange={event => {this.onInputChange(event)}}
            addToDo={this.addToDo}/>
        </header>
        <section className="main">
          <TodoList todos={this.state.todos} />
        </section>
      </div>
    )
  }
}
