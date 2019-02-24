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
  }
  render() {
    const { todos } = this.state;
    const todoItems = todos.map(item => <TodoItem key={item.id} todo={item} />);

    return <div className="todo-list">{todoItems}</div>;
  }
}

export default App;
