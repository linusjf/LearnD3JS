var myData = [10, 40, 30, 50, 20];
var circleSpacing = 100;
var transitionDuration = 500;

function update() {
  d3.select("g.container")
    .selectAll("circle")
    .data(myData)
    .join(
      function(enter) {
        return enter.append("circle").style("opacity", 0);
      },
      function(update) {
        return update;
      },
      function(exit) {
        return exit
          .transition()
          .duration(transitionDuration)
          .attr("r", 0)
          .style("opacity", 0)
          .attr("cx", 1000)
          .on("end", () => d3.select(this).remove());
      }
    )
    .attr("cx", function(d, i) {
      return i * circleSpacing;
    })
    .transition()
    .duration(transitionDuration)
    .attr("r", function(d) {
      return d;
    })
    .style("opacity", 1);
}

/* eslint-disable */
function action(type) {
  const rand = Math.random();
  switch (type) {
    case "add":
      if (rand >= 0.5) myData.unshift(50 * rand);
      else myData.push(rand);
      break;
    case "remove":
      if (rand >= 0.5) myData.shift(50 * rand);
      else myData.pop();
      break;
    case "update":
      myData = myData.map(() => 50 * Math.random());
      break;
  }
  update();
}

update(myData);
