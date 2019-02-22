import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import todosData from "./todosData";

import "./App.css";

class App extends Component {
  render() {
    const todos = todosData.map(item => <TodoItem key={item.id} todo={item} />);

    return <div className="todo-list">{todos}</div>;
  }
}

export default App;
