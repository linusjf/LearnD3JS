async function main() {
  let context = d3.select("#content canvas").node().getContext("2d");

  let projection = d3.geoOrthographic().scale(300);

  let geoGenerator = d3
    .geoPath()
    .projection(projection)
    .pointRadius(4)
    .context(context);

  let yaw = 300;

  const geojson = await d3.json("/ne_110m_land.json");
  window.setInterval(update, 100);

  function update() {
    projection.rotate([yaw, -45]);

    context.clearRect(0, 0, 800, 600);

    context.lineWidth = 0.5;
    context.strokeStyle = "#333";

    context.beginPath();
    geoGenerator({
      type: "FeatureCollection",
      features: geojson.features
    });
    context.stroke();

    // Graticule
    let graticule = d3.geoGraticule();
    context.beginPath();
    context.strokeStyle = "#ccc";
    geoGenerator(graticule());
    context.stroke();

    yaw -= 0.2;
  }
}

(async () => await main())();
