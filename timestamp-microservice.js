var express = require('express');
var app = express();
var url = require('url');
var timePath;
var myDate;
var dateJSON;

app.get('/*', function(req, res) {
  url = url.parse(req.url, true);
  timePath = url.path.slice(1);

  myDate = new Date(decodeURI(timePath));

  dateJSON = JSON.stringify({
    "unix": myDate.toDateString(),
    "natural": myDate.getMinutes()
  });



  if (!isNaN(myDate.getTime())) {
    dateJSON = JSON.stringify({
      "unix": myDate.getTime(),
      "natural": myDate.toDateString()
    });
  }
  else {
    dateJSON = JSON.stringify({
      "unix": null,
      "natural": null
    });
  }
  res.send(dateJSON);
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Timestamp API listening on port " + process.env.PORT);
});