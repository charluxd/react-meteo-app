import React from 'react';
import WeatherIcon from './WeatherIcon';
import './WeatherForecast.css';

function WeatherForecast() {
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
