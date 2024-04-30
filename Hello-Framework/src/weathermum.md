---
theme: dashboard
toc: false
---

# Weather report (Mumbai)

```js
const mum_forecast = FileAttachment("./data/openmeteo.json").json();
```

```js
display(mum_forecast);
```

```js
function temperaturePlot(data, { width } = {}) {
  return Plot.plot({
    title: "Hourly temperature forecast",
    width,
    x: { type: "utc", ticks: "day", label: null },
    y: { grid: true, inset: 10, label: "Degrees (F)" },
    marks: [
      Plot.lineY(data, {
        x: "time",
        y: "temperature",
        z: null, // varying color, not series
        stroke: "temperature",
        curve: "step-after"
      })
    ]
  });
}
```

<div class="grid grid-cols-1">
  <div class="card">${resize((width) => temperaturePlot(mum_forecast, {width}))}</div>
</div>
