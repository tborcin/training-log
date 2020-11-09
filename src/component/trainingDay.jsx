import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import TrainingTable from "./trainingTable";

class TrainingDay extends Component {
  state = {
    name: "",
    type: "",
    repetitions: "",
    intervalLength: "",
    tempo: "",
    rest: "",
    cardBackgroundColor: "",
  };

  render() {
    return (
      <Accordion key={this.props.id} className="mt-2 ml-3">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            {this.props.name === "Sunday" ? (
              <h3>{this.props.name}</h3>
            ) : (
              this.props.name
            )}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <TrainingTable type="interval" />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

export default TrainingDay;
