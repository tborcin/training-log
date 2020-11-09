import React, { Component } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import TrainingWeek from "./trainingWeek";

class WeekPickerCalendar extends Component {
  state = {
    dateInterval: [],
  };

  constructor() {
    super();

    this.state = {
      dateInterval: [
        this.getFirstDayOfWeek(new Date()),
        this.getLastDayOfWeek(new Date()),
      ],
    };
  }

  onChange = (date) => {
    this.setState({
      dateInterval: [this.getFirstDayOfWeek(date), this.getLastDayOfWeek(date)],
    });
  };

  getFirstDayOfWeek = (date) => {
    let startOfWeek = date;

    if (date.getDay() === 0) {
      startOfWeek = moment(startOfWeek).subtract(6, "day").format("YYYY-MM-DD");
    } else {
      startOfWeek = moment(startOfWeek)
        .subtract(date.getDay() - 1, "day")
        .format("YYYY-MM-DD");
    }

    return new Date(startOfWeek);
  };

  getLastDayOfWeek = (date) => {
    let endOfWeek = date;

    if (date.getDay() === 0) {
      endOfWeek = date;
    } else {
      endOfWeek = moment(endOfWeek)
        .add(7 - date.getDay(), "day")
        .format("YYYY-MM-DD");
    }
    return new Date(endOfWeek);
  };

  getWholeWeek = (monday) => {
    let tuesday = new Date(monday);
    tuesday.setDate(tuesday.getDate() + 1);
    let wednesday = new Date(monday);
    wednesday.setDate(wednesday.getDate() + 2);
    let thursday = new Date(monday);
    thursday.setDate(thursday.getDate() + 3);
    let friday = new Date(monday);
    friday.setDate(friday.getDate() + 4);
    let saturday = new Date(monday);
    saturday.setDate(saturday.getDate() + 5);
    let sunday = new Date(monday);
    sunday.setDate(sunday.getDate() + 6);

    const week = [
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
    ];

    return week;
  };

  render() {
    return (
      <div>
        <Calendar
          className="ml-2 mt-2"
          showWeekNumbers
          onChange={this.onChange}
          onClickWeekNumber={(weekNumber, date) => this.onChange(date)}
          value={this.state.dateInterval}
        />
        <TrainingWeek days={this.getWholeWeek(this.state.dateInterval[0])} />
      </div>
    );
  }
}

export default WeekPickerCalendar;
