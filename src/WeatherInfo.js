import React from "react";
import FormattedDate from "./FormattedDate";

function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-8 temperature-now">
          <span>
            <img
              src={props.data.icon}
              className="temperature-icon"
            ></img>
          </span>
          <span className="temperature-degree">
            {Math.round(props.data.temperature)}
          </span>
          <span className="temperature-unit">°C</span>
        </div>

        <div className="col-4">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
