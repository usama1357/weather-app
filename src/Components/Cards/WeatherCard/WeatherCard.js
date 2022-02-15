import React from "react";
import { Card } from "antd";

export default function WeatherCard(props) {
  return (
    <div
      className="site-card-border-less-wrapper"
      style={{
        padding: "30px",
        width: "370px",
        display: "inline-block",
        opacity: "0.7",
      }}
    >
      <Card
        title={"Station: " + props.data.name}
        bordered={false}
        style={{ width: 300 }}
      >
        <p>Temperature : {props.data.main.temp}</p>
        <p>Feels Like : {props.data.main.feels_like}</p>
        <p>Max Temp : {props.data.main.temp_max}</p>
        <p>Min Temo : {props.data.main.temp}</p>
      </Card>
    </div>
  );
}
