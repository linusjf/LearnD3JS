var width = 400;
var height = 400;
var data = [10, 20, 30];
var max = Math.max(...data);
var colors = ["orange", "purple", "yellow"];

var svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

var g = svg
  .selectAll("g")
  .data(data)
  .enter()
  .append("g")
  .attr("transform", () => "translate(0,0)");

g.append("circle")
  .attr("cx", (d, i) => i * 75 + 50)
  .attr("cy", () => 75)
  .attr("r", (d) => d * 1.5)
  .attr("fill", (d, i) => colors[i]);

g.append("text")
  .attr("x", (d, i) => i * 75 + 50 - (d * 1.5) / 2)
  .attr("y", 80)
  .attr("stroke", "teal")
  .attr("font-size", (d) => (d / max) * 30 + "px")
  .attr("font-family", "sans-serif")
  .text((d) => d);
