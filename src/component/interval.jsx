import React, { Component } from "react";
import { BiPencil } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import { BiSave } from "react-icons/bi";
import { IconContext } from "react-icons";
import { Card, Col, Form } from "react-bootstrap";

class Interval extends Component {
  state = {};

  renderIcons() {
    return (
      <Form.Group className="mt-3" as={Col} controlId="icons">
        <IconContext.Provider value={{ color: "blue", size: "50px" }}>
          <BiPencil />
          <BiTrash />
          <BiSave />
        </IconContext.Provider>
      </Form.Group>
    );
  }

  renderSaveIcon() {
    return (
      <Form.Group className="mt-3" as={Col} controlId="icons">
        <IconContext.Provider value={{ color: "blue", size: "50px" }}>
          <BiSave
            data-toggle="save-interval-icon-tooltip"
            title="Save interval"
          />
        </IconContext.Provider>
      </Form.Group>
    );
  }

  renderDeleteIcon() {
    return (
      <Form.Group className="mt-3" as={Col} controlId="icons">
        <IconContext.Provider value={{ color: "red", size: "50px" }}>
          <BiTrash
            data-toggle="delete-interval-icon-tooltip"
            title="Delete interval"
            onClick={() => this.props.onDelete(this.props.interval.id)}
          />
        </IconContext.Provider>
      </Form.Group>
    );
  }

  render() {
    return (
      <Card.Body>
        <Form.Row>
          <Form.Group
            className="col-1"
            as={Col}
            controlId="interval-repetitions-input"
          >
            <Form.Label>Repetitions</Form.Label>
            <Form.Control placeholder={this.props.interval.repetitions} />
          </Form.Group>

          <Form.Group
            className="col-1"
            as={Col}
            controlId="interval-length-input"
          >
            <Form.Label>Length</Form.Label>
            <Form.Control placeholder={this.props.interval.length} />
          </Form.Group>

          <Form.Group
            className="col-1"
            as={Col}
            controlId="interval-pace-input"
          >
            <Form.Label>Pace</Form.Label>
            <Form.Control placeholder={this.props.interval.pace} />
          </Form.Group>

          <Form.Group
            className="col-1"
            as={Col}
            controlId="interval-rest-input"
          >
            <Form.Label>Rest</Form.Label>
            <Form.Control placeholder={this.props.interval.rest} />
          </Form.Group>

          <Form.Group as={Col} controlId="interval-comment-input">
            <Form.Label>Comment</Form.Label>
            <Form.Control placeholder={this.props.interval.comment} />
          </Form.Group>

          <Form.Group className="col-1" as={Col} controlId="interval-save-icon">
            {this.renderSaveIcon()}
          </Form.Group>
          <Form.Group
            className="col-1"
            as={Col}
            controlId="interval-delete-icon"
          >
            {this.renderDeleteIcon()}
          </Form.Group>
        </Form.Row>
      </Card.Body>
    );
  }
}

export default Interval;
