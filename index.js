'use strict';

var through = require('through2');
var path = require('path');
var romemin = require('rome-min');

module.exports = function() {
	return through.obj(function(file, encoding, callback) {
		console.log('%j', file.path);
		file.contents = new Buffer(romemin(file.path));
		callback(null, file);
	});
};

