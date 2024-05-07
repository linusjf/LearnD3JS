var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let i = 25;

function doInsert() {
  console.log(i);
  if (i < 0) return;

  var myData = letters.slice(i).split("");
  console.log(myData);
  i--;
  updateLetters(myData);
}

function updateLetters(data) {
  d3.select(".content")
    .selectAll("div")
    .data(data, function(d) {
      return d;
    })
    .join("div")
    .transition()
    .style("left", function(d, i) {
      return i * 32 + "px";
    })
    .text(function(d) {
      return d;
    });
}

doInsert();
