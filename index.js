var express = require('express');
var app = express();
var fronts = require('./lib/fronts');

app.get('/', function (req, res) {
	res.redirect('/uk');
});
app.get(/\/.+/, function (req, res, next) {
	// Strip leading slash
	var url = req.path.substring(1);
	if (fronts.isFront(url)) {
		fronts.middleware(url)(req, res, next);
	} else {
		next();
	}
});

app.use('/static', express.static('static'));
app.use('/static', express.static('build'));
app.use('/static', express.static('jspm_packages/github/guardian/frontend@master'));
app.use('/static/jspm_packages', express.static('jspm_packages'));
app.use('/api/static', express.static('build'));
app.use('/api', express.static('api/static'));

var server = app.listen(3000, function () {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);

});