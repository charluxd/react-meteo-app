import React from 'react';
import WeatherIcon from './WeatherIcon';
import './WeatherForecast.css';
import axios from 'axios';

function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = '0ebc654fccbc00189d5408f3d6f15b08';
  let longtitude = props.coordinates.lon;
  let lattitude = props.coordinates.lat;
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
