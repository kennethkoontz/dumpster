//setup enabling express middleware and url route template

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));

app.listen(process.env.PORT);

