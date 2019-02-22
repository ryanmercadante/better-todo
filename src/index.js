import React from "react"; // we need this to understand JSX
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// ReactDOM.render takes two arguments
// 1. What do i want to render - this will render app in the div with id of root
// 2. Where do i want to render it - needs to point to div with an id of root
ReactDOM.render(<App />, document.getElementById("root"));
