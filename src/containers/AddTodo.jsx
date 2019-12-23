import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", alertDisplay: "none" };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value.trim()
    });
    this.setState({ alertDisplay: "none" });
  };

  handleClick = () => {
    let { value } = this.state;

    if (value != "") {
      this.props.dispatch(addTodo(value));
    } else {
      this.setState({ alertDisplay: "block" });
    }
  };

  render() {
    return (
      <div>
        <input
          placeholder="Please enter item here"
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick} className="btn m-l-2">
          Add Todo
        </button>
        <div
          className="alert alert-danger"
          style={{ display: this.state.alertDisplay }}
        >
          Please enter some text
        </div>
      </div>
    );
  }
}

export default connect()(AddTodo);
