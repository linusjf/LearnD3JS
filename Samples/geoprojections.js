async function main() {
  // REQUEST DATA
  const geojson = await d3.json("/ne_110m_land.json");
  let projections = [{
      type: "AzimuthalEqualArea",
      scale: 100
    },
    {
      type: "AzimuthalEquidistant",
      scale: 80
    },
    {
      type: "Gnomonic",
      scale: 100
    },
    {
      type: "Orthographic",
      scale: 160
    },
    {
      type: "Stereographic",
      scale: 100
    },
    {
      type: "Albers",
      scale: 120
    },
    {
      type: "ConicConformal",
      scale: 100
    },
    {
      type: "ConicEqualArea",
      scale: 100
    },
    {
      type: "ConicEquidistant",
      scale: 100
    },
    {
      type: "Equirectangular",
      scale: 80
    },
    {
      type: "Mercator",
      scale: 70
    },
    {
      type: "TransverseMercator",
      scale: 70
    }
  ];

  let circles = [
    [0, 0],
    [-90, 0],
    [-45, 0],
    [45, 0],
    [90, 0],
    [0, -70],
    [0, -35],
    [0, 35],
    [0, 70]
  ];
  let geoCircle = d3.geoCircle().radius(10).precision(1);
  let geoGraticule = d3.geoGraticule();

  let width = 200,
    height = 200,
    globalScale = 0.5;

  function updateCanvas(d) {
    let context = this.getContext("2d");

    let projection = d3["geo" + d.type]()
      .scale(globalScale * d.scale)
      .center([0, 0])
      .rotate([0.1, 0, 0])
      .translate([0.5 * width, 0.5 * height]);

    let geoGenerator = d3.geoPath().projection(projection).context(context);

    context.lineWidth = 0.5;

    // Graticule
    context.strokeStyle = "#ccc";
    context.fillStyle = "none";
    context.setLineDash([1, 1]);
    context.beginPath();
    geoGenerator(geoGraticule());
    context.stroke();

    // World
    context.fillStyle = "#eee";
    context.setLineDash([]);
    context.beginPath();
    geoGenerator({
      type: "FeatureCollection",
      features: geojson.features
    });
    context.fill();
    context.stroke();

    // Circles
    context.strokeStyle = "#888";
    context.fillStyle = "none";
    circles.forEach((center) => {
      geoCircle.center(center);
      context.beginPath();
      geoGenerator(geoCircle());
      context.stroke();
    });

    // Projection label
    context.fillStyle = "#333";
    context.font = "14px sans-serif";
    context.fillText("geo" + d.type, 6, 17);
  }

  function update() {
    let u = d3.select("#content").selectAll("canvas").data(projections);
    u.join(
      (enter) => {
        return enter
          .append("canvas")
          .attr("width", width + "px")
          .attr("height", height + "px")
          .merge(u)
          .each(updateCanvas);
      },
      (exit) => {
        return exit.remove();
      }
    );
  }

  update();
}

(async () => await main())();
