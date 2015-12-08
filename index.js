var express  = require('express');
var app = express();
var port = process.env.PORT || 8080;
var http = require('http');

var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json()); // parse application/json
app.use(methodOverride('X-HTTP-Method-Override'));


var elections = '[{"id":"BDE"}]';

var election = '';

app.get('/api/Votes/Elections', function(req, res) {
	res.json(elections);
});
/*
app.param('id', function (req, res, next, id) {
	console.log('Id called in the URL.');
	next();
})

app.get('/api/Votes/Elections/:id', function(req, res) {

	JSON.parse(elections);
	res.json(elections)
});

app.put('/api/Votes/Elections/:id', function(req, res) {

});

app.post('/api/Votes/Elections/:id/Votes', function(req, res) {

});
*/
app.listen(port);
console.log("App listening on port " + port);