import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      hasError: false
    };

    this.textInput = React.createRef();
  }

  handleChange = event => {
    this.setState({
      value: event.target.value.trim()
    });
    this.showAlert(false);
  };

  handleClick = () => {
    let { value } = this.state;

    if (value != "") {
      this.props.dispatch(addTodo(value));
    } else {
      this.showAlert(true);
    }
  };

  showAlert = toShow => {
    if (toShow) {
      this.setState({ hasError: true });
      this.textInput.current.focus();
    } else {
      this.setState({ hasError: false });
    }
  };

  render() {
    return (
      <div>
        <input
          placeholder="Please enter item here"
          onChange={this.handleChange}
          ref={this.textInput}
          className={this.state.hasError ? "hasError" : null}
        />
        <button onClick={this.handleClick} className="btn m-l-2">
          Add Todo
        </button>
        <div
          className="alert alert-danger"
          style={{ display: this.state.hasError ? "block" : "none" }}
        >
          Please enter some text
        </div>
      </div>
    );
  }
}

export default connect()(AddTodo);
