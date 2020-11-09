import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

class Rest extends Component {
  state = {};
  render() {
    console.log(this.props.inputFields);
    return (
      <Card className="p-1" border="primary" bg="light">
        <Card.Header>Rest</Card.Header>
        <Card.Body>
          <Form.Group as={Col} controlId="rest-comment-input">
            <Form.Label>Comment</Form.Label>
            <Form.Control placeholder={this.props.inputFields.comment} />
          </Form.Group>
        </Card.Body>
      </Card>
    );
  }
}

export default Rest;
