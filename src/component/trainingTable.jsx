import React, { Component } from "react";
import Table from "react-bootstrap/Table";

class TrainingTable extends Component {
  state = {
    trainingHeaders: [],
    trainingBody: [],
  };

  constructor(props) {
    super(props);
    let trainingHeaders = this.state.trainingHeaders;
    let trainingBody = this.state.trainingBody;
    if (props.type === "rest") {
      trainingHeaders = ["Comment"];
      trainingHeaders = ["Volno"];
    } else if (props.type === "easy") {
      trainingHeaders = ["Training type", "Training length"];
      trainingBody = ["Recovery run", "15km"];
    } else if (props.type === "tempo") {
      trainingHeaders = ["Training type", "Training length", "Training tempo"];
      trainingBody = ["Tempo run", "10km", "3:50"];
    } else if (props.type === "interval") {
      trainingHeaders = [
        "Training type",
        "Interval repetitions",
        "Interval length",
        "Interval tempo",
        "Interval rest",
      ];
      trainingBody = ["Interval run", "8", "1km", "3:30", "2 min"];
    }

    this.state = { trainingHeaders, trainingBody };
  }

  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            {this.state.trainingHeaders.map((h) => {
              return <th>{h}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {this.state.trainingBody.map((b) => {
              return <td>{b}</td>;
            })}
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default TrainingTable;
