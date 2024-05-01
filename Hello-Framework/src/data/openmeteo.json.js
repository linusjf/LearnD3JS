import { fetchWeatherApi } from "openmeteo";

const params = {
  latitude: 19.0728,
  longitude: 72.8826,
  hourly: [
    "temperature_2m",
    "relative_humidity_2m",
    "dew_point_2m",
    "precipitation",
    "wind_speed_10m",
    "wind_direction_10m",
    "is_day"
  ],
  temperature_unit: "fahrenheit",
  wind_speed_unit: "mph",
  timezone: "auto",
  models: "best_match"
};
const url = "https://api.open-meteo.com/v1/forecast";
const responses = await fetchWeatherApi(url, params);

// Helper function to form time ranges
const range = (start, stop, step) =>
  Array.from(
    {
      length: (stop - start) / step
    },
    (_, i) => start + i * step
  );

// Process first location. Add a for-loop for multiple locations or weather
// models
const response = responses[0];

// Attributes for timezone and location
const utcOffsetSeconds = response.utcOffsetSeconds();
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
    precipitation: hourly.variables(3).valuesArray(),
    windSpeed10m: hourly.variables(4).valuesArray(),
    windDirection10m: hourly.variables(5).valuesArray(),
    isDay: hourly.variables(6).valuesArray()
  }
};

function degToCompass(num) {
  var val = Math.floor(num / 22.5 + 0.5);
  var arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW"
  ];
  return arr[val % 16];
}

const openmeteo = weatherData;
const points = openmeteo.hourly.time.map((item, i) => ({
  time: item,
  temperature: openmeteo.hourly.temperature2m[i],
  humidity: openmeteo.hourly.relativeHumidity2m[i],
  dewpoint: openmeteo.hourly.dewPoint2m[i],
  isDay: openmeteo.hourly.isDay[i],
  windspeed: openmeteo.hourly.windSpeed10m[i],
  precipitation: openmeteo.hourly.precipitation[i],
  windDirection: degToCompass(openmeteo.hourly.windDirection10m[i])
}));
process.stdout.write(JSON.stringify(points));
