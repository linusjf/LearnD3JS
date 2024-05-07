var myData = [40, 10, 20, 60, 30];

d3.select(".chart")
  .selectAll("circle")
  .data(myData)
  .join("circle")
  .attr("cx", function(d, i) {
    return i * 100 + 50;
  })
  .attr("cy", 50)
  .attr("r", function(d) {
    return 0.5 * d;
  })
  .style("fill", function(d) {
    return d > 30 ? "orange" : "#eee";
  });
