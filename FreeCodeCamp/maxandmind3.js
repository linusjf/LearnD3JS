const positionData = [
  [1, 7, -4],
  [6, 3, 8],
  [2, 9, 3]
];
const output = d3.max(positionData, (d) => d[2]);
d3.select("body").append("h2").text(output);
