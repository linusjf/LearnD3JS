const scale = d3.scaleLinear(); // Create the scale here
const output = scale(50); // Call scale with an argument here
d3.select("body").append("h2").text(output);
