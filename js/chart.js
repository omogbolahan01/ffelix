var xValues = [
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
];
var yValues = [600, 900, 1400, 2000, 1600, 1700, 2500, 1700, 2300];
var barColors = [
  "purple",
  "yellow",
  "brown",
  "blue",
  "red",
  "blue",
  "yellow",
  "red",
  "purple",
];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  //   options: {...}
});
