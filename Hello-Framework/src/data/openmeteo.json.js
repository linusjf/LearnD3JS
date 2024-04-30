import {
  fetchWeatherApi
} from "openmeteo";

const params = {
  latitude: 19.0728,
  longitude: 72.8826,
  hourly: [
    "temperature_2m",
    "relative_humidity_2m",
    "dew_point_2m",
    "precipitation_probability",
    "wind_speed_10m",
    "wind_direction_10m",
    "is_day"
  ],
  temperature_unit: "fahrenheit",
  wind_speed_unit: "mph",
  timezone: "auto"
};
const url = "https://api.open-meteo.com/v1/forecast";
const responses = await fetchWeatherApi(url, params);

// Helper function to form time ranges
const range = (start, stop, step) =>
  Array.from({
      length: (stop - start) / step
    },
    (_, i) => start + i * step
  );

// Process first location. Add a for-loop for multiple locations or weather
// models
const response = responses[0];

// Attributes for timezone and location
const utcOffsetSeconds = response.utcOffsetSeconds();
/*
const timezone = response.timezone();
const timezoneAbbreviation = response.timezoneAbbreviation();
const latitude = response.latitude();
const longitude = response.longitude();
*/
const hourly = response.hourly();

// Note: The order of weather variables in the URL query and the indices below
// need to match!
const weatherData = {
  hourly: {
    time: range(
      Number(hourly.time()),
      Number(hourly.timeEnd()),
      hourly.interval()
    ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
    temperature2m: hourly.variables(0).valuesArray(),
    relativeHumidity2m: hourly.variables(1).valuesArray(),
    dewPoint2m: hourly.variables(2).valuesArray(),
    precipitationProbability: hourly.variables(3).valuesArray(),
    windSpeed10m: hourly.variables(4).valuesArray(),
    windDirection10m: hourly.variables(5).valuesArray(),
    isDay: hourly.variables(6).valuesArray()
  }
};

const openmeteo = weatherData;
const points = openmeteo.hourly.time.map((item, i) => ({
  time: item,
  temperature: openmeteo.hourly.temperature2m[i]
}));
process.stdout.write(JSON.stringify(points));
// `weatherData` now contains a simple structure with arrays for datetime and
// weather data
/*for (let i = 0; i < weatherData.hourly.time.length; i++) {
  console.log(weatherData.hourly.time[i].toISOString(),
              weatherData.hourly.temperature2m[i]);
}*/
