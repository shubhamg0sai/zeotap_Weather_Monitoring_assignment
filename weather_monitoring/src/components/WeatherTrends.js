import React from 'react';
const WeatherTrends = ({ trend }) => {
    return (
        <div className="weather-trends">
            <h2 className="trend-city">{trend.city} Trends</h2>
            <p className="average-temp">Average Temperature: <span>{trend.averageTemp}°C</span></p>
            <h3>Weather Conditions Count:</h3>
            <ul className="condition-list">
                {Object.entries(trend.conditionCounts).map(([condition, count], index) => (
                    <li key={index} className="condition-item">
                        <span className="condition-name">{condition}</span>: <span className="condition-count">{count}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WeatherTrends;
