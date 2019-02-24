import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import todosData from "./todosData";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  render() {
    const { todos } = this.state;
    const todoItems = todos.map(item => (
      <TodoItem key={item.id} handleChange={this.handleChange} todo={item} />
    ));

    return <div className="todo-list">{todoItems}</div>;
  }
}

export default App;
