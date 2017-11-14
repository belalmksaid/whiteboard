const express = require('express');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/instant', function(req, res, next) {
});

app.post('/', function(req, res, next) {
});


app.listen(3000, function() {
});
