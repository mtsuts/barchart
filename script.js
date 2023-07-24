const data = [
  {
    category: "A",
    mobile: "A",
    distance: 10,
  },
  {
    category: "B",
    mobile: "B",
    distance: 20,
  },
  {
    category: "C",
    mobile: "C",
    distance: 12,
  },
  {
    category: "D",
    mobile: "D",
    distance: 14,
  },
  {
    category: "E",
    mobile: "E",
    distance: 17,
  },
  {
    category: "F",
    mobile: "F",
    distance: 9,
  },
  {
    category: "G",
    mobile: "G",
    distance: 23,
  },
  {
    category: "H",
    mobile: "H",
    distance: 21,
  },
  {
    category: "I",
    mobile: "I",
    distance: 19,
  },
];

const container = { container: ".bar-chart" };

barChart(data, container);

window.addEventListener('resize', function(){
  const div = document.querySelector('.bar-chart')
  div.innerHTML = ''
  barChart(data, container)
})

