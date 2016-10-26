var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js')

var sentryKey = 'ed1b2cec07394214b58c533486f00cf2'
var sentryApp = '104394'
var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp

var _APP_INFO = {
	name: 'Github Battle',
	branch: 'video4',
	version: '1.0'
}

window.onerror = function() {
	Raven.showReportDialog();
}

Raven.config(sentryURL, {
	release: _APP_INFO.version,
	tags: {
		branch: _APP_INFO.branch,
		//github_commit: 'somehash'
	}
}).install()

//console.log(window.thing.doesNotExist)

ReactDOM.render(
	routes,
	document.getElementById('app')
);