import React, { Component } from "react";
import TrainingDay from "./trainingDay";

class TrainingWeek extends Component {
  state = {
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  };

  render() {
    return (
      <React.Fragment>
        {this.state.days.map((day) => {
          return <TrainingDay id={day} name={day} />;
        })}
      </React.Fragment>
    );
  }
}

export default TrainingWeek;
