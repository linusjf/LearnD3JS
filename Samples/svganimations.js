d3.select("body")
  .style("background-color", "lightblue")
  // make the background-color lightblue.transition()
  .style("background-color", "gray");
// make the background-color gray
const t = d3.transition().duration(5000);
d3.select("main").transition(t).style("background-color", "cyan").delay(2000);
d3.select("div").transition().style("background-color", "pink");
d3.selectAll("h2")
  .transition()
  .style("color", "green")
  .delay(3000)
  .duration(5000);
