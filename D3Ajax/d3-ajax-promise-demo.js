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
  // Use the d3 json method because it will not freeze your webpage while it is waiting for the Web API data
  d3.json(web_api_url).then(function(requestJson) {
    //console.log(data);
    //var requestJson = JSON.parse(request.responseText);
    //this function only runs after the Web API data has been retrieved
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
  });

  console.log("Your page still works while the data is being retrieved :)");
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

d3.select("#get-data-btn").on("click", getDataSynchronous);
d3.selectAll(".style-plot-btn").on("click", styleChart);
