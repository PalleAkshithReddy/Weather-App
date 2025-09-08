import React from "react";

function WeatherCard({ weather }) {
  if (!weather) return null;

  const { name, main, weather: weatherDetails } = weather;
  const iconUrl = `https://openweathermap.org/img/wn/${weatherDetails[0].icon}@2x.png`;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        width: "250px",
        textAlign: "center",
      }}
    >
      <h2>{name}</h2>
      <img src={iconUrl} alt={weatherDetails[0].description} />
      <p>{main.temp} °C</p>
      <p>{weatherDetails[0].description}</p>
      <p>Humidity: {main.humidity}%</p>
    </div>
  );
}

export default WeatherCard;
