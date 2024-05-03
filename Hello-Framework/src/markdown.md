---
title: My favorite page
toc: false
---

# Markdown

<details>
  <summary>Click me</summary>
  This text is not visible by default.
</details>

<div class="grid grid-cols-4">
  <div class="card">

This is **Markdown** inside of _HTML_!

</div>
</div>

<div class="grid grid-cols-4">
  <div class="card"><h1>A</h1></div>
  <div class="card"><h1>B</h1></div>
  <div class="card"><h1>C</h1></div>
  <div class="card"><h1>D</h1></div>
</div>

<div class="grid grid-cols-2">
  <div class="card"><h1>A</h1>1 × 1</div>
  <div class="card grid-rowspan-2"><h1>B</h1>1 × 2</div>
  <div class="card"><h1>C</h1>1 × 1</div>
  <div class="card grid-colspan-2"><h1>D</h1>2 × 1</div>
</div>

<div class="grid grid-cols-2">
  <div class="card">Call me Ishmael.</div>
  <div class="card">Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.</div>
  <div class="card">It is a way I have of driving off the spleen and regulating the circulation.</div>
</div>

<div class="grid grid-cols-2" style="grid-auto-rows: auto;">
  <div class="card">Call me Ishmael.</div>
  <div class="card">Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.</div>
  <div class="card">It is a way I have of driving off the spleen and regulating the circulation.</div>
</div>

<div class="grid grid-cols-2">
  <div class="card">Call me Ishmael.</div>
  <div class="card">Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.</div>
</div>
<div class="grid grid-cols-2">
  <div class="card">It is a way I have of driving off the spleen and regulating the circulation.</div>
</div>

<div class="grid grid-cols-2">
  <div>Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.</div>
  <div class="card">Call me Ishmael.</div>
</div>

<div class="grid grid-cols-4">
  <div class="card">
    ${resize((width) => `This card is ${width}px wide.`)}
  </div>
</div>

```js
const data = weather.slice(-365);
const new_data = data.map((d) => {
  return { day: d.date.getUTCDate(), month: d.date.getUTCMonth() + 1, ...d };
});
display(new_data);
```

<div class="card" style="max-width: 640px;">
  <h2>It gets hotter during summer</h2>
  <h3>And months have 28–31 days</h3>
  ${Plot.cell(new_data, {x: "day", y: "month", fill: "temp_max", tip: true, inset: 0.5}).plot({marginTop: 2, height: 400, padding: 0})}
</div>

<div class="card" style="max-width: 640px;">
  <h2>When is it windiest?</h2>
  ${Plot.cell(new_data, {x: "day", y: "month", fill: "wind", tip: true, inset: 0.5}).plot({marginTop: 2, height: 400, padding: 0})}
</div>

<div class="card" style="max-width: 640px;">
  <h2>When is it warmest based on min_temp?</h2>
  ${Plot.cell(new_data, {x: "day", y: "month", fill: "temp_min", tip: true, inset: 0.5}).plot({marginTop: 2, height: 400, padding: 0})}
</div>

<div class="grid grid-cols-2">
  <div class="card">
    <h2>Lorem ipsum</h2>
    <p>Id ornare arcu odio ut sem nulla pharetra. Aliquet lectus proin nibh nisl condimentum id venenatis a. Feugiat sed lectus vestibulum mattis ullamcorper velit. Aliquet nec ullamcorper sit amet. Sit amet tellus cras adipiscing. Condimentum id venenatis a condimentum vitae. Semper eget duis at tellus. Ut faucibus pulvinar elementum integer enim.</p>
    <p>Et malesuada fames ac turpis. Integer vitae justo eget magna fermentum iaculis eu non diam. Aliquet risus feugiat in ante metus dictum at. Consectetur purus ut faucibus pulvinar.</p>
  </div>
  <div class="card" style="padding: 0;">
    ${Inputs.table(industries)}
  </div>
</div>

```js
const industryInput = Inputs.select(
  industries.map((d) => d.industry),
  { unique: true, sort: true, label: "Industry:" }
);
const industry = Generators.input(industryInput);
```

<div class="card" style="display: flex; flex-direction: column; gap: 1rem;">
  ${industryInput}
  ${resize((width) => Plot.plot({
    width,
    y: {grid: true, label: "Unemployed (thousands)"},
    marks: [
     Plot.areaY(industries.filter((d) => d.industry === industry), {x: "date", y: "unemployed", fill: "var(--theme-foreground-muted)", curve: "step"}),
      Plot.lineY(industries.filter((d) => d.industry === industry), {x: "date", y: "unemployed", curve: "step"}),
     Plot.ruleY([0])
    ]
  }))}
</div>

<div class="note">This is a note.</div>

<div class="tip">This is a tip.</div>

<div class="warning">This is a warning.</div>

<div class="caution">This is a caution.</div>

<div class="tip">
  <p>This is a <i>styled</i> tip using <small>HTML</small>.</p>
</div>
