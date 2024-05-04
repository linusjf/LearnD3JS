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

```js
const x = Math.random();

display(x);
```

```js
display({ hello: { subject: "world" }, numbers: [1, 2, 3, 4] });
```

```js
for (let i = 0; i < 5; ++i) {
  display(i);
}
```

```js
display(html`Your lucky number is ${Math.floor(Math.random() * 10)}!`);
```

```js
const y = display(Math.random());
display(y);
```

The value of `y` is ${y}

```js
display([1, 2, 3]);
```

${display(\[1, 2, 3\])}

```js
const displayThere = display;
```

```js
display(
  Inputs.button("Click me", { value: 0, reduce: (i) => displayThere(++i) })
);
```

```js
display(html`1 + 2`);
// implicit display
```

```js
display(1), display(2);
// no implicit display
```

${1 + 2}

${display(1), display(2)}

The current width is ${width}.

<div class="grid grid-cols-4">
  <div class="card">
    ${resize((width) => `This card is ${width}px wide.`)}
  </div>
</div>

<div class="grid grid-cols-2" style="grid-auto-rows: 240px;">
  <div class="card" style="padding: 0;">
    ${resize((width, height) => Plot.barY([9, 4, 8, 1, 11, 3, 4, 2, 7, 5]).plot({width, height}))}
  </div>
  <div class="card" style="padding: 0;">
    ${resize((width, height) => Plot.barY([3, 4, 2, 7, 5, 9, 4, 8, 1, 11]).plot({width, height}))}
  </div>
</div>
