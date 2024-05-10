const scale = d3.scaleLinear();
scale.domain([250, 500]);
scale.range([10, 150]);

const output = scale(50);
d3.select("body").append("h2").text(output);
