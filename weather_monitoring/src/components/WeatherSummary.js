import React from 'react';
const WeatherSummary = ({ day }) => {
    return (
        <div className="weather-summary">
            <h2 className="city-name">{day.city}</h2>
            <div className="summary-details">
                <p className="average-temp">Avg: {day.average_temp}°C</p>
                <p className="max-temp">Max: {day.max_temp}°C</p>
                <p className="min-temp">Min: {day.min_temp}°C</p>
                <p className="dominant-condition">Condition: {day.dominant_condition}</p>
            </div>
        </div>
    );
};

export default WeatherSummary;
