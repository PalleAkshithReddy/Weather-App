import "./App.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherWidget from "./components/WeatherWidget";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState(null);
  const apiKey = "8bb4ee646a1d849ee710fa9f42a377e2"; 

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: city,
            appid: apiKey,
            units: "metric",
          },
        }
      );
      setWeather(response.data);
    } catch (error) {
      alert("City not found!");
      setWeather(null);
    }
  };

  return (
    <div id="root">
      <h1>Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      <WeatherWidget weather={weather} />
    </div>
  );
}

export default App;