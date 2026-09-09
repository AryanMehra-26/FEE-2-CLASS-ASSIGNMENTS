import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [searchedCity, setSearchedCity] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const cityName = city.trim();

    if (!cityName) {
      setError("Please enter a city name.");
      setWeather(null);
      return;
    }

    try {
      setError("");
      setWeather(null);

      // Find the city's latitude and longitude
      const locationResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          cityName
        )}&count=1&language=en&format=json`
      );

      if (!locationResponse.ok) {
        throw new Error("Unable to find the city.");
      }

      const locationData = await locationResponse.json();

      if (!locationData.results || locationData.results.length === 0) {
        throw new Error("City not found.");
      }

      const location = locationData.results[0];

      // Fetch weather using the city's coordinates
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,wind_speed_10m,weather_code`
      );

      if (!weatherResponse.ok) {
        throw new Error("Unable to fetch weather data.");
      }

      const weatherData = await weatherResponse.json();

      setWeather(weatherData.current);
      setSearchedCity(location.name);
    } catch (err) {
      setError(err.message);
      setWeather(null);
      setSearchedCity("");
    }
  };

  return (
    <main className="weather-app">
      <div className="weather-card">

        <h1>Weather App</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />

          <button type="submit">
            Search
          </button>
        </form>

        {error && <p className="error">{error}</p>}

        {weather && (
          <section className="weather-info">

            <h2>{searchedCity}</h2>

            <p>
              Temperature: {weather.temperature_2m}°C
            </p>

            <p>
              Wind Speed: {weather.wind_speed_10m} km/h
            </p>

            <p>
              Weather Code: {weather.weather_code}
            </p>

          </section>
        )}

      </div>
    </main>
  );
}

export default App;