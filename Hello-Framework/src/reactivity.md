# Reactivity

```js
const volcano = FileAttachment("volcano.json").json();
```

```js
display(volcano);
```

The volcano dataset has ${volcano.values.length.toLocaleString("en-US")} values.

```js
const a = FileAttachment("a.csv").csv({ typed: true });
const b = FileAttachment("b.csv").csv({ typed: true });
const c = FileAttachment("c.csv").csv({ typed: true });
```

```js
const fast = new Promise((resolve) => setTimeout(() => resolve("fast"), 500));
const slow = new Promise((resolve) => setTimeout(() => resolve("slow"), 5000));
```

```js
display(fast);
display(slow);
```

```js
const one = 1;
const two = 2;
await new Promise((resolve) => setTimeout(resolve, 10000));
```

${one + two}
