import {
  forceSimulation,
  forceCollide,
  forceX
} from "https://cdn.jsdelivr.net/npm/d3-force@3/+esm";

const nodes = [{}, {}];
const simulation = forceSimulation(nodes)
  .force("x", forceX())
  .force("collide", forceCollide(5))
  .on("tick", () => console.log(nodes[0].x));

console.log(simulation);
