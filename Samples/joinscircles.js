function getData() {
  let data = [];
  let numItems = Math.ceil(Math.random() * 5);

  for (let index = 0; index < numItems; index++) {
    data.push(Math.random() * 60);
  }

  return data;
}

function update(data) {
  d3.select(".chart")
    .selectAll("circle")
    .data(data)
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
}

function updateAllCircles() {
  let myData = getData();
  update(myData);
}

updateAllCircles();

d3.select(".circle").on("click", updateAllCircles);
