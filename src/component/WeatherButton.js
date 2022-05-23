import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, handleCityChange }) => {
  return (
    <div className="button-area">
      <Button variant="warning" onClick={() => handleCityChange("Pazarcık")}>
        Current Location
      </Button>

      {cities.map((city) => (
        <Button variant="warning" onClick={() => handleCityChange(city)}>
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
