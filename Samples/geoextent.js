async function main() {
  // REQUEST DATA
  const geojson = await d3.json("/ne_110m_land.json");
  let context = d3.select("#content canvas").node().getContext("2d");

  let projection = d3.geoEquirectangular();

  let geoGenerator = d3.geoPath().projection(projection).context(context);

  update(geojson);

  function update(geojson) {
    projection.fitExtent(
      [
        [20, 20],
        [620, 420]
      ],
      geojson
    );

    context.lineWidth = 0.5;
    context.strokeStyle = "#888";

    context.beginPath();
    geoGenerator({
      type: "FeatureCollection",
      features: geojson.features
    });
    context.stroke();

    // extent border
    context.beginPath();
    context.setLineDash([2, 2]);
    context.rect(20, 20, 600, 400);
    context.stroke();
  }
}

(async () => await main())();
