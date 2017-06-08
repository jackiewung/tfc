var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
  console.log('listening to', port);
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});