import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class InputField extends Component {
  state = {};
  render() {
    return (
      <Form.Group className="ml-1" controlId={this.props.name}>
        <Form.Label>{this.props.label}</Form.Label>
        <Form.Control
          className="mr-sm-2"
          type="repetitions"
          placeholder={this.props.placeholder}
        />
      </Form.Group>
    );
  }
}

export default InputField;
