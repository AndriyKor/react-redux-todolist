import React, { Component } from "react";
import PropTypes from "prop-types";
import Todo from "./Todo.jsx";
import "./../styles/loader";

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return this.props.isFetching ? (
      <div className="loader">Loading...</div>
    ) : this.props.todos.length === 0 ? (
      <span className="noItems">The list is empty</span>
    ) : (
      <ul className="list">
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
