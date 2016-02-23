
<script type="text/javascript" src="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22miami%2C%20fl%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"></script>
<script type="text/javascript" src="https://books.google.com/books/previewlib.js"></script>
<script type="text/javascript" src="//books.google.com/books/previewlib.js"></script>
<script type="text/javascript">
GBS_insertEmbeddedViewer(['Harry Potter','ISBN:0439708184'],600,500);
</script>
var request = getHTTPObject();
if (request) {
	request.onreadystatechange = = doSomething;
	request.open("GET","file.ext", true);
	request.send(null);
}
function doSomething() {
	if(xhr.readyState == 4) {
	if (xhr.statos == 200) {
	//Success!
	}
	}
}
{
 "query": {
  "count": 1,
  "created": "2016-02-23T21:46:51Z",
  "lang": "en-us",
  "results": {
   "channel": {
    "title": "Yahoo! Weather - Miami, FL",
    "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Miami__FL/*http://weather.yahoo.com/forecast/USFL0316_f.html",
    "description": "Yahoo! Weather for Miami, FL",
    "language": "en-us",
    "lastBuildDate": "Tue, 23 Feb 2016 3:52 pm EST",
    "ttl": "60",
    "location": {
     "city": "Miami",
     "country": "United States",
     "region": "FL"
    },
    "units": {
     "distance": "mi",
     "pressure": "in",
     "speed": "mph",
     "temperature": "F"
    },
    "wind": {
     "chill": "77",
     "direction": "140",
     "speed": "13"
    },
    "atmosphere": {
     "humidity": "82",
     "pressure": "29.89",
     "rising": "2",
     "visibility": "10"
    },
    "astronomy": {
     "sunrise": "6:48 am",
     "sunset": "6:17 pm"
    },
    "image": {
     "title": "Yahoo! Weather",
     "width": "142",
     "height": "18",
     "link": "http://weather.yahoo.com",
     "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
    },
    "item": {
     "title": "Conditions for Miami, FL at 3:52 pm EST",
     "lat": "25.78",
     "long": "-80.22",
     "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Miami__FL/*http://weather.yahoo.com/forecast/USFL0316_f.html",
     "pubDate": "Tue, 23 Feb 2016 3:52 pm EST",
     "condition": {
      "code": "28",
      "date": "Tue, 23 Feb 2016 3:52 pm EST",
      "temp": "77",
      "text": "Mostly Cloudy"
     },
     "description": "\n<img src=\"http://l.yimg.com/a/i/us/we/52/28.gif\"/><br />\n<b>Current Conditions:</b><br />\nMostly Cloudy, 77 F<BR />\n<BR /><b>Forecast:</b><BR />\nTue - Partly Cloudy. High: 79 Low: 72<br />\nWed - Isolated Thunderstorms/Wind. High: 83 Low: 63<br />\nThu - Sunny. High: 74 Low: 53<br />\nFri - Sunny. High: 72 Low: 50<br />\nSat - Sunny. High: 72 Low: 54<br />\n<br />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Miami__FL/*http://weather.yahoo.com/forecast/USFL0316_f.html\">Full Forecast at Yahoo! Weather</a><BR/><BR/>\n(provided by <a href=\"http://www.weather.com\" >The Weather Channel</a>)<br/>\n",
     
     "guid": {
      "isPermaLink": "false",
      "content": "USFL0316_2016_02_27_7_00_EST"
     }
    }
   }
  }
 }
}
