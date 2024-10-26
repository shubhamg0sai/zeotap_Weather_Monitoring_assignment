import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY; // Ensure to set this in your .env file
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';
const cities = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad'];

// Fetch current weather summary for specified cities
export const fetchWeatherSummary = async () => {
    try {
        const promises = cities.map(city =>
            axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        );
        const results = await Promise.all(promises);

        return results.map(res => ({
            city: res.data.name,
            average_temp: res.data.main.temp,
            max_temp: res.data.main.temp_max,
            min_temp: res.data.main.temp_min,
            dominant_condition: res.data.weather[0].main,
        }));
    } catch (error) {
        console.error('Error fetching weather summary:', error);
        return []; // Return empty array on error
    }
};

// Fetch 5-day weather forecast for specified cities
export const fetchWeatherForecast = async () => {
    try {
        const promises = cities.map(city =>
            axios.get(`${FORECAST_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        );
        const results = await Promise.all(promises);

        return results.map(res => ({
            city: res.data.city.name,
            forecast: res.data.list.map(item => ({
                date: item.dt_txt,
                temp: item.main.temp,
                condition: item.weather[0].main,
            })),
        }));
    } catch (error) {
        console.error('Error fetching weather forecast:', error);
        return []; // Return empty array on error
    }
};

// Calculate weather trends based on forecast data
export const calculateTrends = (forecastData) => {
    return forecastData.map(day => {
        const temps = day.forecast.map(item => item.temp);
        const averageTemp = temps.reduce((sum, temp) => sum + temp, 0) / temps.length;

        // Count occurrences of weather conditions
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
