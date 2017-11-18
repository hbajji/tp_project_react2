import React, { Component } from 'react'
import Header from './Header.js'
import TodoListContainerUI from './TodoListContainerUI'
import AddTodoContainerUI from './AddTodoContainerUI'
class App extends Component {

  state = {
    todos: [
      {id: 1, title: 'new ', isDone: false},
      {id: 1, title: 'done', isDone: true},
      {id: 1, title: 'old', isDone: false},
    ]
  }
  deleteTodo = (index) => {
    this.setState({
      todos:this.state.todos.filter((todo,i) => i !== index)
    })
  }

  addNewTodo = (content) => {
    this.setState({
      todos:this.state.todos.concat({
        id: this.state.todos.lenght + 1,
        title: content,
        isDone: false
      })
    })
  }

  render() {

    return (
      <div className="container">
        <Header/>
        <div className="sub-container">
          <TodoListContainerUI myTodos={this.state.todos} onDeleteTodo={this.deleteTodo}/>
          <AddTodoContainerUI onAddTodo={this.addNewTodo}/>
        </div>
      </div>
    )
  }
}

export default App;
