var width = 300;
var height = 300;
var svg = d3
  .select(".svgcontainer")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

var group = svg.append("g").attr("transform", "translate(60, 60) rotate(30)");

var rect = group
  .append("rect")
  .attr("x", 20)
  .attr("y", 20)
  .attr("width", 60)
  .attr("height", 30)
  .attr("fill", "green");

var circle = group
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 30)
  .attr("fill", "red");

svg = d3
  .select(".svgcontainer")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

var my_transform = d3Transform().translate([60, 60]).rotate(30);

group = svg.append("g").attr("transform", my_transform);

/* eslint-disable */
rect = group
  .append("rect")
  .attr("x", 20)
  .attr("y", 20)
  .attr("width", 60)
  .attr("height", 30)
  .attr("fill", "pink");

circle = group
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 30)
  .attr("fill", "orange");
