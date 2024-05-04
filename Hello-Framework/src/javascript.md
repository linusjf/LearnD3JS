# JavaScript

```js
1 + 2;
```

```js
const foo = 1 + 2;
```

```js echo
1 + 2;
```

```js run=false
1 + 2;
```

```js run=true
display(document.createTextNode("[insert chart here]")); // some imagination required
```

```js
function greeting(name) {
  return html`Hello, <i>${name}</i>!`;
}
```

```js
display(greeting("world"));
```

```js
display(
  Plot.lineY(aapl, { x: "Date", y: "Close" }).plot({ y: { grid: true } })
);
```

```js
display(
  html`<span style=${{ color: `hsl(${(now / 10) % 360} 100% 50%)` }}
    >Rainbow text!</span
  >`
);
```

```js
display(html`<p>You rolled ${Math.floor(Math.random() * 20) + 1}</p>`);
```

```js
const numberInput = Inputs.input(0);
const number = Generators.input(numberInput);
```

```js
display(html`Interpolate a sparkline...`);
display(
  Plot.plot({
    axis: null,
    margin: 0,
    width: 80,
    height: 17,
    x: { type: "band", round: false },
    marks: [
      Plot.rectY(aapl.slice(-15 - number, -1 - number), {
        x: "Date",
        y1: 150,
        y2: "Close",
        fill: "var(--theme-foreground-focus)"
      })
    ]
  })
);
```

```js
display(
  html`or even a reactive input ${Inputs.bind(
    html`<input type="range" style="width: 120px;" />`,
    numberInput
  )} ${number}`
);
```
