d3.select("body").transition().style("background-color", "lightblue");
const t = d3.transition().duration(5000);
d3.select("main").transition(t).style("background-color", "cyan");
d3.select("div").transition().style("background-color", "pink");
