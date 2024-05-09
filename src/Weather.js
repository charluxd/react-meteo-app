import React from "react";

function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-input"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            ></input>
          </div>
        </div>
      </form>
      <h1>Lisbon</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-8 temperature-now">
          <span>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              className="temperature-icon"
            ></img>
          </span>
          <span className="temperature-degree">15</span>
          <span className="temperature-unit">°C</span>
        </div>

        <div className="col-4">
          <ul>
            <li>Humidity: 15%</li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Weather;
