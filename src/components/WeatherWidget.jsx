import React from "react";

function WeatherWidget({ weather }) {
  if (!weather) {
    return (
      <div className="widget-card">
        <p className="widget-placeholder">Search for a city to see the weather.</p>
      </div>
    );
  }

  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;

  return (
    <div className="widget-card">
      <div className="widget-header">
        <h2 className="widget-city">{weather.name}, {weather.sys.country}</h2>
        <img src={iconUrl} alt={weather.weather[0].description} className="widget-icon" />
      </div>
      <div className="widget-temp">{Math.round(weather.main.temp)}°C</div>
      <div className="widget-desc">{weather.weather[0].description}</div>
      <div className="widget-details">
        <span>Humidity: {weather.main.humidity}%</span>
        <span>Wind: {Math.round(weather.wind.speed)} m/s</span>
      </div>
    </div>
  );
}

export default WeatherWidget;