var width = 300;
var height = 300;
var svg = d3
  .select(".svgcontainer")
  .append("svg")
  .attr("width", width)
  .attr("height", height);
svg
  .append("line")
  .attr("x1", 100)
  .attr("y1", 100)
  .attr("x2", 200)
  .attr("y2", 200)
  .style("stroke", "rgb(255,0,0)")
  .style("stroke-width", 2);

svg = d3
  .select(".svgcontainer")
  .append("svg")
  .attr("width", width)
  .attr("height", height);
//Create and append rectangle element
svg
  .append("rect")
  .attr("x", 20)
  .attr("y", 20)
  .attr("width", 200)
  .attr("height", 100)
  .attr("fill", "green");

svg = d3
  .select(".svgcontainer")
  .append("svg")
  .attr("width", width)
  .attr("height", height);
//Append circle
svg
  .append("circle")
  .attr("cx", 200)
  .attr("cy", 50)
  .attr("r", 20)
  .attr("fill", "green");

svg = d3
  .select(".svgcontainer")
  .append("svg")
  .attr("width", width)
  .attr("height", height);
svg
  .append("ellipse")
  .attr("cx", 200)
  .attr("cy", 50)
  .attr("rx", 100)
  .attr("ry", 50)
  .attr("fill", "green");
