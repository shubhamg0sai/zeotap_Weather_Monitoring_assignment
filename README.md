# zeotap_weather_monitoring_assignment
The Weather Monitoring System is designed to enhance the ability to monitor and analyze weather conditions through efficient data aggregation and visualization. By leveraging the OpenWeatherMap API. the system provides timely and relevant information to various stakeholders, improving decision-making and preparedness for weather-related events

# Features
1. Current Weather Display: Show current weather conditions based on user location or search input.
2. Forecast: Display daily and hourly weather forecasts.
3. Weather Alerts: Notify users of severe weather alerts in their area.
4. Historical Data: Provide access to past weather data trends.
5. Responsive Design: Ensure usability on various devices (mobile, tablet, desktop).
6. User Preferences: Allow users to save their preferred locations and units (Celsius/Fahrenheit).
7. PWA Support: Enable offline access and home screen installation.

## Project Structure 

```
weather-monitoring/
├── package.json
├── package-lock.json
├── public/
│   ├── favicon.ico           # Favicon for the app
│   ├── index.html            # Main HTML file
│   ├── logo192.png           # 192x192 resolution logo
│   ├── logo512.png           # 512x512 resolution logo
│   ├── manifest.json         # Web app manifest for PWA
│   └── robots.txt            # Instructions for web crawlers
├── README.md                 # Documentation for the project
└── src/
    ├── api.js                # API handling for weather data
    ├── App.css               # Global styles for the app
    ├── App.js                # Main App component
    ├── App.test.js           # Tests for the App component
    ├── components/           # Reusable components
    │   ├── Alert.js          # Component for alert messages
    │   ├── WeatherForecast.js # Component for displaying weather forecasts
    │   ├── WeatherSummary.js  # Component for summarizing weather data
    │   └── WeatherTrends.js   # Component for visualizing weather trends
    ├── index.css             # Styles for the entry point
    ├── index.js              # Main entry point for the React app
    ├── logo.svg              # SVG logo for the app
    ├── reportWebVitals.js    # Performance reporting utilities
    ├── setupTests.js         # Setup for testing environment
    └── WeatherForecast.css    # Specific styles for the WeatherForecast component
```





# API Design
- Weather API Endpoints
- Current Weather Data

- GET /api/weather/current?location={location
- Description: Fetches current weather data for a specified location.
- Response:
- json
 ```
   {
  "location": "City Name",
  "temperature": "20°C",
  "humidity": "60%",
  "condition": "Clear",
  "icon": "icon_url"
}
   ```
### Build and installation
1. **Clone the Repository**
    ```bash
   git clone https://github.com/shubhamg0sai/zeotap_Weather_Monitoring_assignment.git
   cd zeotap_Weather_Monitoring_assignment
   cd weather-monitoring
   ```
2. **Install Dependenciest**:
   ```bash
   npm install
   ```

3. **Configure your OpenWeatherMap API key**
   **create .env file under weather-monitoring directory**
   ```bash
   REACT_APP_API_KEY=your_openweathermap_api_key
   ```

4. **Run the Development Server**
   ```bash
   npm start
   ```

5. **Build for Production**
   ```
   npm run build
   ```
   Open your web browser and go to http://127.0.0.1:3000/.
