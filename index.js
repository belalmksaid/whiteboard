const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const moveTo = 0;
const lineTo = 1;
const clear = 2;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const canvaslog = new Array();
let guid = 0;

app.get('/whiteboard/all', function(req, res, next) {
	res.send(JSON.stringify(canvaslog));
});

app.post('/whiteboard', function(req, res, next) {
	res.send("Hi");
	for(let i = 0; i < req.body.length; i++) {
		let temp = req.body[i];
		temp.id = guid++;
		if(temp.t == clear)
			canvaslog.length = 0;
		canvaslog.push(temp);
	}
});


app.listen(3000, function() {
});
