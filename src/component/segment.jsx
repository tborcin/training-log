import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Intervals from "./intervals";
import Tempo from "./tempo";
import Easy from "./easy";
import Rest from "./rest";
import { Card } from "react-bootstrap";

class Segment extends Component {
  state = {
    inputFields: {},
    trainingType: "select",
    counter: 0,
  };

  getNewInterval = () => {
    const newId = this.state.counter;
    this.setState({ counter: this.state.counter + 1 });
    return {
      id: newId,
      repetitions: "15",
      length: "1km",
      pace: "3:30",
      rest: "2min",
      comment: "Don't start too hard",
    };
  };

  handleNewInterval = () => {
    let inputFields = this.state.inputFields;
    const intervals = inputFields.intervals.concat(this.getNewInterval());
    inputFields.intervals = intervals;
    this.setState({ inputFields: inputFields });
  };

  handleDelete = (intervalId) => {
    const inputFields = this.state.inputFields;
    const intervals = inputFields.intervals.filter((i) => i.id !== intervalId);
    inputFields.intervals = intervals;
    this.setState({ inputFields: inputFields });
  };

  hadleChange = (event) => {
    this.setState({ trainingType: event.target.value });
    this.updateInputFields(event.target.value);
  };

  updateInputFields = (trainingType) => {
    if (trainingType === "interval") {
      const inputFields = {
        warmUp: "2km easy",
        coolDown: "2km easy",
        intervals: [],
      };
      inputFields.intervals.push(this.getNewInterval());
      this.setState({ inputFields: inputFields });
    } else if (trainingType === "tempo") {
      const inputFields = {
        warmUp: "2km easy",
        coolDown: "2km easy",
        runLength: "15km",
        runPace: "4:00",
        comment: "Don't start too hard",
      };
      this.setState({ inputFields: inputFields });
    } else if (trainingType === "easy") {
      const inputFields = {
        runLength: "10km",
        comment: "Run usual route around Hrusov",
      };
      this.setState({ inputFields: inputFields });
    } else if (trainingType === "rest") {
      const inputFields = { comment: "Have a rest today" };
      this.setState({ inputFields: inputFields });
    }
  };

  renderTrainingType = () => {
    if (this.state.trainingType === "interval") {
      return (
        <Intervals
          onDelete={this.handleDelete}
          onAddNewInterval={this.handleNewInterval}
          inputFields={this.state.inputFields}
        />
      );
    } else if (this.state.trainingType === "tempo") {
      return <Tempo inputFields={this.state.inputFields} />;
    } else if (this.state.trainingType === "easy") {
      return <Easy inputFields={this.state.inputFields} />;
    } else if (this.state.trainingType === "rest") {
      return <Rest inputFields={this.state.inputFields} />;
    }
  };

  render() {
    return (
      <Card border="dark" bg="light">
        <Card.Header>Monday</Card.Header>
        <Card.Body>
          <Form>
            <Form.Row>
              <Col className="col-2 my-1 mr-2">
                <Form.Control
                  as="select"
                  className="my-1 mr-sm-2"
                  id="inlineFormCustomSelectPref"
                  custom
                  value={this.state.trainingType}
                  onChange={this.hadleChange}
                >
                  <option value="select">Select training type</option>
                  <option value="rest">Rest</option>
                  <option value="easy">Easy</option>
                  <option value="tempo">Tempo</option>
                  <option value="interval">Interval</option>
                </Form.Control>
              </Col>
            </Form.Row>
            {this.renderTrainingType()}
            <div style={{ display: "flex" }}>
              <Button
                style={{ marginTop: "5px", marginLeft: "auto" }}
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default Segment;
