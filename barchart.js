// New

function barChart(data, params) {
  const container = d3.select(params.container);
  // define metrics

  const width = container.node().getBoundingClientRect().width;
  const height = 500;
  const marginTop = 30;
  const marginBottom = 20;
  const marginLeft = 30;
  const marginRight = 30;
  const chartWidth = width - marginLeft - marginRight;
  const chartHeight = height - marginTop - marginBottom;

  // create scales and axises

  const xScale = d3
    .scaleBand()
    .domain(data.map((d) => d.category))
    .range([0, chartWidth]);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data.map((d) => d.distance))])
    .range([chartHeight, 0]);

  const xAxis = d3.axisBottom(xScale).tickSizeInner(5);
  const yAxis = d3.axisLeft(yScale).tickSizeInner(5);

  //create svg element and append to container
  const svg = container
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  //create g element and append to svg

  const g = svg
    .append("g")
    .attr("transform", `translate(${marginLeft}, ${marginTop})`);

  // draw axises

  g.append("g")
    .call(xAxis)
    .attr("transform", `translate(0, ${chartHeight})`)
    .attr("class", "axis");

  g.append("g").call(yAxis).attr("class", "axis");

  // create bar, append to g element and draw bars


  
  const bar = g
    .append("g")
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("fill", (d,i)=> `${i % 2 === 1 ? '#d993d0' : '#75dd95'}`)
    .attr("class", "rect")
    // .on("mouseover", function () {
    //   d3.select(this).attr("fill", "white");
    // })
    // .on("mouseout", function (d,i) {
    //   d3.select(this).attr("fill", `${i % 2 === 1 ? '#d993d0' : '#75dd95'}`);
    // })
    .attr("width", xScale.bandwidth() / 2)
    .attr("x", (d) => xScale(d.category) + xScale.bandwidth() / 4)
    .attr("y", 0)
    .attr("height", 0);

  bar.each(function (d) {
    tippy(this, {
      content: d.distance,
      arrow: false,
    });
  });

  bar
    .transition()
    .duration(2500)
    .attr("height", (d) => yScale(0) - yScale(d.distance))
    .attr("y", (d) => yScale(d.distance));
}
