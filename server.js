/**
 * This file is used only for development, to spin up a temporary 
 * webserver that can be used to test thte changes while working
 * in the local development environment. 
 */

var liveServer = require("live-server");
 
var params = {
	port: 9000, // Set the server port. Defaults to 8080. 
	host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0. 
	root: "", // Set root directory that's being server. Defaults to cwd. 
	open: true, // When false, it won't load your browser by default. 
	ignore: '', // comma-separated string for paths to ignore 
	file: "index.html", // When set, serve this file for every 404 (useful for single-page applications) 
	wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec. 
	mount: [['/neat', '/bourbon', './node_modules']] // Mount a directory to a route. 
};
liveServer.start(params);



// var connect = require('connect');
// var serveStatic = require('serve-static');
// connect().use(serveStatic(__dirname)).listen(9000);