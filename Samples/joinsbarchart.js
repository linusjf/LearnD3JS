var cities = [{
    name: "London",
    population: 8674000
  },
  {
    name: "New York",
    population: 8406000
  },
  {
    name: "Sydney",
    population: 4293000
  },
  {
    name: "Paris",
    population: 2244000
  },
  {
    name: "Beijing",
    population: 11510000
  }
];

// Join cities to rect elements and modify height, width and position
d3.select(".bars")
  .selectAll("rect")
  .data(cities)
  .join("rect")
  .attr("height", 19)
  .attr("x", 0)
  .attr("width", function(d) {
    var scaleFactor = 0.00004;
    return d.population * scaleFactor;
  })
  .attr("y", function(d, i) {
    return i * 20;
  });

// Join cities to text elements and modify content and position
d3.select(".labels")
  .selectAll("text")
  .data(cities)
  .join("text")
  .attr("y", function(d, i) {
    return i * 20 + 13;
  })
  .text(function(d) {
    return d.name;
  });
