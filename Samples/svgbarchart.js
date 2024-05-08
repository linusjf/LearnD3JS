var data = [10, 5, 12, 15, 17, 25, 32];
var width = 300,
  scaleFactor = 8,
  barHeight = 30;

var graph = d3.select("body").append("svg");

console.log(graph);
graph = graph.attr("width", width).attr("height", barHeight * data.length);

console.log(graph);

var bar = graph
  .selectAll("g")
  .data(data)
  .enter()
  .append("g")
  .attr("transform", (d, i) => "translate(0," + i * barHeight + ")");

bar
  .append("rect")
  .attr("width", (d) => d * scaleFactor)
  .attr("height", barHeight - 1);

bar
  .append("text")
  .attr("x", (d) => d * scaleFactor)
  .attr("y", barHeight / 2)
  .attr("dy", ".35em")
  .text((d) => d);
