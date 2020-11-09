import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

class Easy extends Component {
  state = {};

  render() {
    console.log(this.props.inputFields);
    return (
      <Card className="p-1" border="primary" bg="light">
        <Card.Header>Easy</Card.Header>
        <Card.Body>
          <Form.Row className="p-1">
            <Form.Group
              className="col-2"
              as={Col}
              controlId="easy-length-input"
            >
              <Form.Label>Run length</Form.Label>
              <Form.Control placeholder={this.props.inputFields.runLength} />
            </Form.Group>
            <Form.Group as={Col} controlId="easy-comment-input">
              <Form.Label>Comment</Form.Label>
              <Form.Control placeholder={this.props.inputFields.comment} />
            </Form.Group>
          </Form.Row>
        </Card.Body>
      </Card>
    );
  }
}

export default Easy;
