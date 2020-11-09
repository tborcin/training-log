import React, { Component } from "react";
import Interval from "./interval";
import { Card, Form, Col } from "react-bootstrap";
import { BiPlusCircle } from "react-icons/bi";
import { IconContext } from "react-icons";

class Intervals extends Component {
  state = {};

  renderPlusIcon() {
    return (
      <Form.Group className="mt-3" as={Col} controlId="icons">
        <IconContext.Provider value={{ color: "green", size: "30px" }}>
          <BiPlusCircle
            onClick={this.props.onAddNewInterval}
            data-toggle="add-interval-icon-tooltip"
            title="Add new interval"
          />
        </IconContext.Provider>
      </Form.Group>
    );
  }

  render() {
    return (
      <Card className="p-1" border="primary" bg="light">
        <Card.Header>Interval training</Card.Header>
        <Form.Row className="p-1">
          <Form.Group as={Col} controlId="interval-warm-up-input">
            <Form.Label>Warm up</Form.Label>
            <Form.Control placeholder={this.props.inputFields.warmUp} />
          </Form.Group>

          <Form.Group as={Col} controlId="interval-cool-down-input">
            <Form.Label>Cool down</Form.Label>
            <Form.Control placeholder={this.props.inputFields.coolDown} />
          </Form.Group>
        </Form.Row>
        <Card bg="light">
          <Card.Header>Intervals</Card.Header>
          {this.props.inputFields.intervals.map((interval) => (
            <Interval
              key={interval.id}
              interval={interval}
              onDelete={this.props.onDelete}
            />
          ))}
          {this.renderPlusIcon()}
        </Card>
      </Card>
    );
  }
}

export default Intervals;
