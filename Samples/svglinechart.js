async function main() {
  const data = await d3.csv("/data.csv", d3.autoType);
  // set the dimensions and margins of the graph
  var margin = {
      top: 20,
      right: 50,
      bottom: 30,
      left: 50
    },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  // set the ranges
  var x = d3.scaleLinear().range([0, width]);
  console.log(x);
  var y = d3.scaleLinear().range([height, 0]);

  // define the line
  var valueline = d3
    .line()
    .x((d) => x(d.Year))
    .y((d) => y(d.Population));

  // append the svg obgect to the body of the page
  // appends a 'group' element to 'svg'
  // moves the 'group' element to the top left margin
  var svg = d3
    .select("body")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Scale the range of the data
  x.domain(d3.extent(data, (d) => d.Year));
  y.domain(d3.extent(data, (d) => d.Population));

  // Add the valueline path.
  svg.append("path").data([data]).attr("class", "line").attr("d", valueline);

  // Add the bottom X Axis
  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add the top X Axis
  svg.append("g").attr("transform", "translate(0,0)").call(d3.axisTop(x));

  // Add the Y Axis Left
  svg.append("g").call(d3.axisLeft(y));

  // Add the Y Axis Right
  svg
    .append("g")
    .attr("transform", "translate(" + width + ",0)")
    .call(d3.axisRight(y));
}

(async () => await main())();
