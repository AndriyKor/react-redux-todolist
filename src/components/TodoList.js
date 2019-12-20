import React, { Component } from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import "./../styles/loader.css";

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return this.props.isFetching ? (
      <div className="loader">Loading...</div>
    ) : (
      <ul>
        {this.props.todos.map(todo => (
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => this.props.toggleTodo(todo.id)}
          />
        ))}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  isFetching: PropTypes.bool.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  fetchTodos: PropTypes.func.isRequired
};

export default TodoList;
