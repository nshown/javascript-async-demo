const coindesk_url = "https://api.coindesk.com/v1/bpi/historical/close.json?start=2020-01-01&end=2020-02-29";
const slowwly_url = "http://slowwly.robertomurray.co.uk/delay/8000/url/";
const web_api_url = slowwly_url + coindesk_url;

var data = [];
var layout = {};

function displayPlot(){
  Plotly.newPlot("plot-here", data, layout, {displayModeBar: false});
}

function getDataSynchronous()
{
  var request = new XMLHttpRequest();
  request.open('GET', web_api_url, false);  // `false` makes the request synchronous
  request.send(null);

  if (request.status === 200) {
    console.log(request.responseText);
  }
  else{
    console.log("I wasn't able to get data from that url")
    return;
  }

  var requestJson = JSON.parse(request.responseText);
  var bpiJson = requestJson.bpi;

  myTrace = {
    x: Object.keys(bpiJson),
    y: Object.values(bpiJson),
    type: 'scatter'
  }

  data = [myTrace];

  layout = {
    autosize:true,
  }

  displayPlot();

  console.log("Finally Finished!");
}

function styleChart(){
  if (data.length !== 0) {
    var btnText = d3.event.target.innerText.toLowerCase();

    if (btnText === 'dark') {
      data[0].line = {color: '#7F7F7F'};
    
      layout = {
        autosize:true,
        plot_bgcolor:"black",
      }
    } else {
      data[0].line = {color: 'dark blue'};
    
      layout = {
        autosize:true,
      }
    }

    displayPlot();
  }
}

function sayHello(){
  alert("Hello!  I am a message displayed by running a JavaScript function!");
}

d3.select("#say-hello-btn").on("click", sayHello);
d3.select("#get-data-btn").on("click", getDataSynchronous);
d3.selectAll(".style-plot-btn").on("click", styleChart);
