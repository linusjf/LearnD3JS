// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h)
  .append("rect")
  .attr("width", 25)
  .attr("height", 100)
  .attr("x", 0)
  .attr("y", 0);
