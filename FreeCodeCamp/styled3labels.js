const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 150;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d) => h - 3 * d)
  .attr("width", 25)
  .attr("height", (d) => d * 3)
  .attr("fill", "navy");

svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text((d) => d)
  .attr("x", (d, i) => i * 30)
  .attr("y", (d) => h - 3 * d - 3)
  .attr("fill", "red")
  .style("font-size", "25px");
