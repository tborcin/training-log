import React from "react";
import "./App.css";
import Segment from "./component/segment";
import WeekPickerCalendar from "./component/weekPickerCalendar";

function App() {
  // const today = new Date("9.9.2020");
  // console.log(today.getDay());
  // console.log(today.getMonth());
  // console.log(today.getFullYear());
  // console.log(today);
  // const newData = data.map((data) => {
  //   console.log(data["19.10.2020"]);
  // });

  return (
    <React.Fragment>
      <Segment />
      <WeekPickerCalendar />
    </React.Fragment>
  );
}

export default App;
