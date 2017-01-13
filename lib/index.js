"use strict";

const bunyan = require('bunyan');
const config = require('config');

var streams = [];
var logLevel = 'debug';

// Setup console for dev environments
if (process.env.NODE_ENV === undefined || process.env.NODE_ENV === 'dev' || (config.Logging && config.Logging.Debug)) {
	streams.push({
		name: 'console',
		level: logLevel,
		stream: process.stdout
	});
}

// Setup the app name
var appName = 'SiteShot';
if (config.has('Application.Name') && config.Application.Name) {
    appName = config.Application.Name;
}

var logger = bunyan.createLogger({
    name: appName,
    streams: streams
});

module.exports = logger;