let weatherdata = {
  code: "200",
  updateTime: "2021-04-19T21:35+08:00",
  fxLink: "http://hfx.link/2ax1",
  daily: [
    {
      fxDate: "2021-04-19",
      sunrise: "05:29",
      sunset: "18:58",
      moonrise: "10:00",
      moonset: "00:47",
      moonPhase: "Waxing crescent",
      tempMax: "28",
      tempMin: "15",
      iconDay: "100",
      textDay: "Sunny",
      iconNight: "101",
      textNight: "Cloudy",
      wind360Day: "129",
      windDirDay: "SE",
      windScaleDay: "1-2",
      windSpeedDay: "9",
      wind360Night: "90",
      windDirNight: "E",
      windScaleNight: "1-2",
      windSpeedNight: "3",
      humidity: "39",
      precip: "0.0",
      pressure: "1009",
      vis: "25",
      cloud: "15",
      uvIndex: "8",
    },
    {
      fxDate: "2021-04-20",
      sunrise: "05:27",
      sunset: "18:59",
      moonrise: "10:58",
      moonset: "01:36",
      moonPhase: "First Quarter",
      tempMax: "25",
      tempMin: "12",
      iconDay: "101",
      textDay: "Cloudy",
      iconNight: "101",
      textNight: "Cloudy",
      wind360Day: "180",
      windDirDay: "S",
      windScaleDay: "3-4",
      windSpeedDay: "16",
      wind360Night: "135",
      windDirNight: "SE",
      windScaleNight: "1-2",
      windSpeedNight: "3",
      humidity: "45",
      precip: "0.0",
      pressure: "1010",
      vis: "25",
      cloud: "10",
      uvIndex: "6",
    },
    {
      fxDate: "2021-04-21",
      sunrise: "05:26",
      sunset: "19:00",
      moonrise: "12:01",
      moonset: "02:19",
      moonPhase: "Waxing gibbous",
      tempMax: "16",
      tempMin: "12",
      iconDay: "101",
      textDay: "Cloudy",
      iconNight: "305",
      textNight: "Light Rain",
      wind360Day: "90",
      windDirDay: "E",
      windScaleDay: "1-2",
      windSpeedDay: "3",
      wind360Night: "90",
      windDirNight: "E",
      windScaleNight: "1-2",
      windSpeedNight: "3",
      humidity: "60",
      precip: "0.0",
      pressure: "1009",
      vis: "25",
      cloud: "25",
      uvIndex: "6",
    },
    {
      fxDate: "2021-04-22",
      sunrise: "05:24",
      sunset: "19:01",
      moonrise: "13:09",
      moonset: "02:57",
      moonPhase: "Waxing gibbous",
      tempMax: "16",
      tempMin: "11",
      iconDay: "104",
      textDay: "Overcast",
      iconNight: "154",
      textNight: "Overcast",
      wind360Day: "90",
      windDirDay: "E",
      windScaleDay: "1-2",
      windSpeedDay: "3",
      wind360Night: "90",
      windDirNight: "E",
      windScaleNight: "1-2",
      windSpeedNight: "3",
      humidity: "68",
      precip: "0.0",
      pressure: "1013",
      vis: "25",
      cloud: "25",
      uvIndex: "2",
    },
    {
      fxDate: "2021-04-23",
      sunrise: "05:23",
      sunset: "19:02",
      moonrise: "14:19",
      moonset: "03:31",
      moonPhase: "Waxing gibbous",
      tempMax: "18",
      tempMin: "10",
      iconDay: "104",
      textDay: "Overcast",
      iconNight: "154",
      textNight: "Overcast",
      wind360Day: "90",
      windDirDay: "E",
      windScaleDay: "1-2",
      windSpeedDay: "3",
      wind360Night: "0",
      windDirNight: "N",
      windScaleNight: "1-2",
      windSpeedNight: "3",
      humidity: "61",
      precip: "0.0",
      pressure: "1022",
      vis: "25",
      cloud: "19",
      uvIndex: "2",
    },
    {
      fxDate: "2021-04-24",
      sunrise: "05:22",
      sunset: "19:03",
      moonrise: "15:31",
      moonset: "04:01",
      moonPhase: "Waxing gibbous",
      tempMax: "21",
      tempMin: "12",
      iconDay: "101",
      textDay: "Cloudy",
      iconNight: "101",
      textNight: "Cloudy",
      wind360Day: "45",
      windDirDay: "NE",
      windScaleDay: "1-2",
      windSpeedDay: "3",
      wind360Night: "45",
      windDirNight: "NE",
      windScaleNight: "1-2",
      windSpeedNight: "3",
      humidity: "35",
      precip: "0.0",
      pressure: "1021",
      vis: "25",
      cloud: "14",
      uvIndex: "2",
    },
    {
      fxDate: "2021-04-25",
      sunrise: "05:20",
      sunset: "19:04",
      moonrise: "16:44",
      moonset: "04:29",
      moonPhase: "Waxing gibbous",
      tempMax: "22",
      tempMin: "12",
      iconDay: "101",
      textDay: "Cloudy",
      iconNight: "150",
      textNight: "Clear",
      wind360Day: "45",
      windDirDay: "NE",
      windScaleDay: "1-2",
      windSpeedDay: "3",
      wind360Night: "180",
      windDirNight: "S",
      windScaleNight: "1-2",
      windSpeedNight: "3",
      humidity: "19",
      precip: "0.0",
      pressure: "1011",
      vis: "25",
      cloud: "1",
      uvIndex: "8",
    },
  ],
  refer: {
    sources: ["Weather China"],
    license: ["commercial license"],
  },
};
d3.select(".date").html(d3.timeFormat("%Y-%m-%d")(new Date()));
let showChart = "Weather";
class Bar {
  constructor(data, id, title = "") {
    this.data = data;
    this.id = id;
    this.title = title;
    this.handleData();
    this.initBarSvg();
    this.drawBar();
  }

  handleData() {
    this.BarData = this.data;
    this.weekDay = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  }
  initBarSvg() {
    let div = d3.select(`#chart`);
    this.getWH(div);
    div.selectAll("*").remove();
    this.margin = { left: 60, right: 20, top: 30, bottom: 30 };
    this.innerW = this.width - this.margin.left - this.margin.right;
    this.innerH = this.height - this.margin.top - this.margin.bottom;
    this.svg = div
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height);
    this.ChartArea = this.svg
      .append("g")
      .attr("transform", `translate(${this.margin.left},${this.margin.top})`);

    this.ChartArea.append("text")
      .attr("transform", `translate(${this.innerW / 2},${this.innerH + 30})`)
      .text("The next 7 days");
    this.ChartArea.append("text")
      .attr("transform", `translate(${-55},${this.innerH / 4}) rotate(90)`)
      .text("The temperature Max");
    //title
    this.svg.append("text").attr("x", 80).attr("y", 20).text(this.title);
    this.DrawArea = this.ChartArea.append("g");

    this.x = d3
      .scaleBand()
      .range([0, this.innerW])
      .domain(this.BarData.map((d) => d.fxDate))
      .padding(0.3);
    this.y = d3
      .scaleLinear()
      .range([this.innerH, 0])
      .domain([0, d3.max(this.BarData, (d) => +d.tempMax)]);
    this.AxisY = this.ChartArea.append("g");
    this.AxisX = this.ChartArea.append("g").attr(
      "transform",
      `translate(0,${this.innerH})`
    );
    this.AxisX.call(d3.axisBottom(this.x));
  }

  getWH(node) {
    this.width = node.node().getBoundingClientRect().width;
    this.height = node.node().getBoundingClientRect().height;
  }
  drawBar() {
    this.AxisY.call(d3.axisLeft(this.y));
    this.DrawArea.selectAll("rect")
      .data(this.BarData)
      .join("rect")
      .attr("class", (d, i) => "day" + d.fxDate) //设置一个类名,方便后续调用
      .attr("x", (d, i) => this.x(d.fxDate))
      .attr("y", (d) => this.y(+d.tempMax))
      .attr("width", this.x.bandwidth())
      .attr("height", (d) => this.innerH - this.y(+d.tempMax))
      .attr("stroke", "black")
      .attr("stroke-width", "0.25")
      .attr("fill", "royalblue")
      .on("mouseover", (e, v) => {
        // add mouseover event reference: https://www.d3-graph-gallery.com/graph/interactivity_tooltip.html
        d3.select(".tip")
          .style("visibility", "visible")
          .style("position", "absolute")
          .style("top", e.pageY + "px")
          .style("left", e.pageX + "px")
          .style("background-color", "white")
          .style("padding", "5px")
          .html(` <li>${v.fxDate}</li><li><strong>${v.tempMax}</strong></li>`);
      })
      // add mouseout event
      .on("mouseout", () => {
        d3.select(".tip").style("visibility", "hidden");
      });

    this.drawText();
  }
  drawText() {
    this.DrawArea.selectAll("labelsText")
      .data(this.BarData)
      .join("text")
      .attr("class", "labelsText") //设置一个类名,方便后续调用
      .attr("x", (d, i) => this.x(d.fxDate) + this.x.bandwidth() / 2)
      .attr("y", (d) => this.y(+d.tempMax))
      .text((d) => d3.format(".1f")(32 + d.tempMax * 1.8) + "°F")
      .attr("text-anchor", "middle");
  }
}
class Weather {
  constructor(city) {
    this.city = city;

    this.initDIV();
  }

  async getData() {
    this.weatherData = weatherdata;

    console.log(this.weatherData);
  }

  async initDIV() {
    await this.getData();
    let container = d3.select("#chart");
    container.selectAll("*").remove();
    container = container.append("div").attr("class", "box");
    let day = container
      .selectAll(".day")
      .data(this.weatherData)
      .join("div")
      .attr("class", "day");

    day
      .append("div")
      .attr("class", "temperature")
      .html((d) => d3.format(".1f")(32 + d.tempMax * 1.8) + "°F");
    day
      .append("img")
      .attr("src", (d) =>
        d.textDay === "Sunny"
          ? "./img/Sunny.png"
          : d.textDay === "Cloudy"
          ? "./img/Cloudy.png"
          : "./img/Rainy.png"
      )
      .attr("width", 88)
      .attr("height", 88);
    day
      .append("div")
      .attr("class", "extra")
      .html((d) =>
        d.textDay === "Sunny"
          ? "It’s a good day to go out."
          : d.textDay === "Cloudy"
          ? "It’s a good day to sleep."
          : "It’s not a good day to dry clothes"
      );
    day
      .append("div")
      .attr("class", "dateText")
      .html((d) => d.fxDate);
  }
}

d3.select(".button1").on("click", (e) => {
  showChart = "Weather";
  new Weather(weatherdata);
  window.scrollBy({
    top: window.innerHeight,
    left: 0,
    behavior: "auto",
  });
});
d3.select(".button2").on("click", (e) => {
  showChart = "Bar";
  new Bar(weatherdata);
  window.scrollBy({
    top: window.innerHeight * 2,
    left: 0,
    behavior: "auto",
  });
});
d3.selectAll(".goback").on("click", (e) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  });
});

d3.select("#cities").on("change", async (e) => {
  let city = e.target.value;
  let list = {
    Beijing: "101010100",
    Shanghai: "101020100",
    Tianjin: "101030100",
    Hangzhou: "101210101",
    Guangzhou: "101280101",
  };
  //get city list
  d3.select(".cityName").html(city);

  await getData(list[city]);
  showChart === "Weather" ? new Weather(weatherdata) : new Bar(weatherdata);
});

async function getData(city) {
  let url2 = `https://api.qweather.com/v7/weather/7d?location=${city}&key=d27aefe94c044c64be6b119fde6d57b9&lang=en`;
  
  weatherdata = await d3.json(url2);
  weatherdata = weatherdata.daily;
  return weatherdata;
}

window.onload = async () => {
  await getData("101010100");
  showChart === "Weather" ? new Weather(weatherdata) : new Bar(weatherdata);
};
