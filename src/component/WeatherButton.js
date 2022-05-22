import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = () => {
  return (
    <div className="button-area">
      <Button variant="warning">Current Location</Button>
      <Button variant="warning">New York</Button>
      <Button variant="warning">paris</Button>
    </div>
  );
};

export default WeatherButton;
