d3.select("#list")
  .selectAll("li")
  .data([10, 20, 30, 25, 15])
  .join("li")
  .text((d) => d);

/* eslint-disable */
function remove() {
  d3.selectAll("li")
    .data([10, 20, 30, 15])
    .join("li")
    .text((d) => d);
  d3.selectAll("button").style("visibility", "hidden");
}
/* eslint-enable */
