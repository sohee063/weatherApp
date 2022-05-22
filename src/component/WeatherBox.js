import React from "react";

const WeatherBox = ({ weather }) => {
  const temperatureC =
    weather && weather.main ? weather.main.temp.toFixed(2) : "";
  const temperatureF =
    weather && weather.main ? (weather.main.temp * 10 + 32).toFixed(2) : "";

  return (
    <div className="weather-box">
      <div>{weather?.name}</div>
      <h2>{`${temperatureC}℃ / ${temperatureF}℉`}</h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
