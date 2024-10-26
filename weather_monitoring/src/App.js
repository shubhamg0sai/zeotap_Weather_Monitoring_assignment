import React, { useEffect, useState } from 'react';
import WeatherSummary from './components/WeatherSummary';
import WeatherForecast from './components/WeatherForecast';
import WeatherTrends from './components/WeatherTrends'; // New component for trends
import Alert from './components/Alert';
import { fetchWeatherSummary, fetchWeatherForecast } from './api';
import './App.css';

const App = () => {
    const [summary, setSummary] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [trends, setTrends] = useState([]); // State for weather trends
    const [alerts, setAlerts] = useState([]);

    const getWeatherData = async () => {
        const weatherData = await fetchWeatherSummary();
        const forecastData = await fetchWeatherForecast();
        setSummary(weatherData);
        setForecast(forecastData);
        
        const trendData = calculateTrends(forecastData);
        setTrends(trendData);
    };

    const calculateTrends = (forecastData) => {
        return forecastData.map(day => {
            const temps = day.forecast.map(item => item.temp);
            const averageTemp = temps.reduce((sum, temp) => sum + temp, 0) / temps.length;

            // Example trend: Count occurrences of conditions
            const conditionCounts = {};
            day.forecast.forEach(item => {
                conditionCounts[item.condition] = (conditionCounts[item.condition] || 0) + 1;
            });

            return {
                city: day.city,
                averageTemp: averageTemp.toFixed(2),
                conditionCounts,
            };
        });
    };

    useEffect(() => {
        getWeatherData();
        const interval = setInterval(getWeatherData, 300000); // 5 minutes
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="App">
            <h1>Weather Monitoring App</h1>
            <div className="summary">
                {summary.map((day, index) => (
                    <WeatherSummary key={index} day={day} />
                ))}
            </div>
            <div className="forecast">
                {forecast.map((day, index) => (
                    <WeatherForecast key={index} day={day} />
                ))}
            </div>
            <div className="trends">
                {trends.map((trend, index) => (
                    <WeatherTrends key={index} trend={trend} />
                ))}
            </div>
            <div className="alerts">
                {alerts.map((alert, index) => (
                    <Alert key={index} message={alert} />
                ))}
            </div>
        </div>
    );
};

export default App;
