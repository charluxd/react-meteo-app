import React from 'react';
import WeatherIcon from './WeatherIcon';
import './WeatherForecast.css';

function WeatherForecast() {
  let apiKey = 'ca80fb7d3o48t3c14460b13a3d83ca48';
  let longtitude = '103.8519072';
  let lattitude = '1.2899175';
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lattitude}&lon=${longtitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Mon</div>
          <div className="WeatherForecast-icon">
            <WeatherIcon code="01d" size={36} text-align="center" />
          </div>
          <div>
            <span className="WeatherForecast-temperature-max">29°C </span>
            <span className="WeatherForecast-temperature-min">26°C </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecast;
