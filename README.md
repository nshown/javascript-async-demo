# Javascript Async Demo
This is a simple demo to illustrate the importance of JavaScript's functional programming style and how it enables webpages to function.  I use Jupyter, D3, Plotly, and Bootstrap to illustrate how JavaScript elegantly handles long running functions that display line plots for data from [coindesk](https://www.coindesk.com/API).


---


Most introduction to programming involves running a series of code and noting the results.  If a particular line of code takes a long time to run this isn't usually too disruptive to your coding process, you wait for the code to finish and then you continue coding.  If you wanted to plot data from a slow Web API your [Jupyter Notebook](JupyterExample\web_api_test.ipynb) just takes a bit longer to finish running.

Unfortunately, if the code you're writing drives a user interface, long running functions can have the effect of [freezing your UI](JsWebApiRequest/index.html) until those functions have completed.  

![Don't let your code freeze!](Resources/fozen-caveman.png)

JavaScript offers a range of functionality to address this issue.  Promises set aside functions until they have completed their initial task.  During this time the webpage functions as normal.  When the initial task has completed the Promise will execute the functions it has been passed, often processing data it has collected.  This allows for [calls to slow Web APIs](D3Ajax/index.html) without freezing your webpages.
