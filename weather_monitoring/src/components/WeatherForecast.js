import React from 'react';
const WeatherForecast = ({ day }) => {
    return (
        <div className="weather-forecast">
            <h2 className="forecast-title">{day.city} Forecast</h2>
            <div className="forecast-items">
                {day.forecast.map((forecast, index) => (
                    <div key={index} className="forecast-card">
                        <p className="forecast-date">{new Date(forecast.date).toLocaleDateString()}</p>
                        <div className="temperature">
                            <p className="temp">{forecast.temp}°C</p>
                            <span className="condition-icon">☀️</span> {/* Placeholder for an icon */}
                        </div>
                        <p className="forecast-condition">{forecast.condition}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeatherForecast;
