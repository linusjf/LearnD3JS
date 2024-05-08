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

  const color = d3.scaleOrdinal(d3.schemeAccent.slice(0, 7));
  var pie = d3.pie().value((d) => d.Percent);

  var path = d3
    .arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

  var label = d3
    .arc()
    .outerRadius(radius)
    .innerRadius(radius - 80);

  var piedata = pie(data);

  console.log(piedata);

  var arcs = g
    .selectAll(".arc")
    .data(piedata)
    .enter()
    .append("g")
    .attr("class", "arc");
  arcs
    .append("path")
    .attr("d", path)
    .attr("fill", (d) => color(d.data.State));
  arcs
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
