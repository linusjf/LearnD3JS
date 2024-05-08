async function main() {
  const data = await d3.csv("/population.csv");
  console.log(data);
  var svg = d3.select("svg"),
    width = svg.attr("width"),
    height = svg.attr("height"),
    radius = Math.min(width, height) / 2;

  var g = svg
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var color = d3.scaleOrdinal([
    "gray",
    "green",
    "brown",
    "orange",
    "yellow",
    "red",
    "purple"
  ]);

  var pie = d3.pie().value((d) => d.Percent);

  var path = d3
    .arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

  var label = d3
    .arc()
    .outerRadius(radius)
    .innerRadius(radius - 80);

  var arc = g
    .selectAll(".arc")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("class", "arc");
  arc
    .append("path")
    .attr("d", path)
    .attr("fill", (d) => color(d.data.State));

  arc
    .append("text")
    .attr("transform", (d) => "translate(" + label.centroid(d) + ")")
    .text((d) => d.data.State);

  svg
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + 10 + ")")
    .append("text")
    .text("Top Population States in India")
    .attr("class", "title");
}

(async () => await main())();
