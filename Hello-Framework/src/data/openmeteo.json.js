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
    "precipitation",
    "wind_speed_10m",
    "wind_direction_10m",
    "is_day",
    "weather_code"
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
    isDay: hourly.variables(6).valuesArray(),
    weather_code: hourly.variables(7).valuesArray()
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

function getWeatherDescription(code) {
  const descriptionMap = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Drizzle: Light intensity",
    53: "Drizzle: Moderate intensity",
    55: "Drizzle: Dense intensity",
    56: "Freezing Drizzle: Light intensity",
    57: "Freezing Drizzle: Dense intensity",
    61: "Rain: Slight intensity",
    63: "Rain: Moderate intensity",
    65: "Rain: Heavy intensity",
    66: "Freezing Rain: Light intensity",
    67: "Freezing Rain: Heavy intensity",
    71: "Snow fall: Slight intensity",
    73: "Snow fall: Moderate intensity",
    75: "Snow fall: Heavy intensity",
    77: "Snow grains",
    80: "Rain showers: Slight",
    81: "Rain showers: Moderate",
    82: "Rain showers: Violent",
    85: "Snow showers slight",
    86: "Snow showers heavy",
    95: "Thunderstorm: Slight or moderate",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail"
  };
  return descriptionMap[code];
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
  windDirection: degToCompass(openmeteo.hourly.windDirection10m[i]),
  shortForecast: getWeatherDescription(openmeteo.hourly.weather_code[i])
}));
process.stdout.write(JSON.stringify(points));
