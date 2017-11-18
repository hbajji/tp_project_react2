import React, { Component } from 'react'
import EMPTY from './empty-list.png'
export default class TodoListContainerUI extends Component {

  render(){
    if(this.props.myTodos.lenght === 0){
      return (
        <div className="todo-list-container">
          <div className="empty">
            <img alt="" src={EMPTY} />
          </div>
        </div>
      )
    }
      return (
        <div className="todo-list-container">
        <h3>My todos:</h3>
        {this.props.myTodos.map((todo, index) =>{
          return(
            <p key={todo.id} className="todo-item">
              <span>{todo.title}</span>
              <a href="#Delete" onClick={e => {
                e.preventDefault();
                this.props.onDeleteTodo(index)
              }}
               className="zmdi zmdi-delete"> </a>
            </p>
          )
        })}

        </div>
      )

  }
}
