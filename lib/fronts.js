var FaciaTool = require('aws-s3-facia-tool');
var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var zlib = require('zlib');
var config = require('../config.json');
var render = require('./render');
tool = new FaciaTool(config);

var cachedConfig;

function updateConfig () {
	tool.fetchConfig().then(function (config) {
		cachedConfig = config;
	});
}
updateConfig();
setInterval(updateConfig, 5 * 60000);

exports.isFront = function (path) {
	return !!cachedConfig.json.fronts[path];
};

exports.middleware = function (path) {
	return function (req, res, next) {
		var key = [
			config.env,
			config.pressedPrefix,
			path,
			'fapi/pressed.json'
		].join('/');

		s3.getObject({
			Bucket: config.bucket,
			Key: key
		}, function (err, data) {
			if (err) {
				next(err);
			} else {
				zlib.gunzip(data.Body, function (err, result) {
					if (err) {
						next(err);
					} else {
						try {
							var pressed = JSON.parse(result.toString());
							res.send(render.front(pressed));
						} catch (ex) {
							next(ex);
						}
					}
				});
			}
		});
	};
};
