import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

class Tempo extends Component {
  state = {};

  render() {
    console.log(this.props.inputFields);
    return (
      <Card className="p-1" border="primary" bg="light">
        <Card.Header>Tempo training</Card.Header>
        <Form.Row className="p-1">
          <Form.Group as={Col} controlId="tempo-warm-up-input">
            <Form.Label>Warm up</Form.Label>
            <Form.Control placeholder={this.props.inputFields.warmUp} />
          </Form.Group>

          <Form.Group as={Col} controlId="tempo-cool-down-input">
            <Form.Label>Cool down</Form.Label>
            <Form.Control placeholder={this.props.inputFields.coolDown} />
          </Form.Group>
        </Form.Row>
        <Card bg="light">
          <Card.Header>Tempo</Card.Header>
          <Card.Body>
            <Form.Row>
              <Form.Group
                className="col-2"
                as={Col}
                controlId="tempo-length-input"
              >
                <Form.Label>Tempo length</Form.Label>
                <Form.Control placeholder={this.props.inputFields.runLength} />
              </Form.Group>

              <Form.Group
                className="col-2"
                as={Col}
                controlId="tempo-pace-input"
              >
                <Form.Label>Tempo pace</Form.Label>
                <Form.Control placeholder={this.props.inputFields.runPace} />
              </Form.Group>
              <Form.Group as={Col} controlId="tempo-comment-input">
                <Form.Label>Comment</Form.Label>
                <Form.Control placeholder={this.props.inputFields.comment} />
              </Form.Group>
            </Form.Row>
          </Card.Body>
        </Card>
      </Card>
    );
  }
}

export default Tempo;
