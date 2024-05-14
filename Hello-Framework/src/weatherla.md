______________________________________________________________________

## theme: dashboard toc: false

# Weather report (Los Angeles)

```js
const forecast = FileAttachment("./data/forecast.json").json();
```

```js
display(forecast);
```

```js
function temperaturePlot(data, { width } = {}) {
  return Plot.plot({
    title: "Hourly temperature forecast",
    width,
    x: { type: "utc", ticks: "day", label: null },
    y: { grid: true, inset: 10, label: "Degrees (F)" },
    marks: [
      Plot.lineY(data.properties.periods, {
        x: "startTime",
        y: "temperature",
        z: null, // varying color, not series
        stroke: "temperature",
        curve: "step-after"
      })
    ]
  });
}
```

```js
function windPlot(data, { width } = {}) {
  return Plot.plot({
    title: "Hourly wind speed forecast",
    width,
    x: { type: "utc", ticks: "day", label: null },
    y: { grid: true, inset: 10, label: "Wind Speed (mph)" },
    marks: [
      Plot.lineY(data.properties.periods, {
        x: "startTime",
        y: "windSpeed",
        z: null, // varying color, not series
        stroke: "windSpeed"
      })
    ]
  });
}
```

<div class="grid grid-cols-1">
  <div class="card">${resize((width) => temperaturePlot(forecast, {width}))}</div>
</div>
<div class="grid grid-cols-1">
  <div class="card">${resize((width) => windPlot(forecast, {width}))}</div>
</div>
