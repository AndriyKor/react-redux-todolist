import React from "react";
import Footer from "./Footer.jsx";
import AddTodo from "../containers/AddTodo.jsx";
import VisibleTodoList from "../containers/VisibleTodoList.jsx";

const App = () => (
  <div className="container">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
