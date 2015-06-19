var fs = require('fs');
var Hogan = require('hogan.js');
var path = require('path');
var jspm = require('jspm');
jspm.setPackagePath('../');

var fromDisk = {};
function read (file) {
	return fs.readFileSync(path.join(__dirname, file)).toString();
}
function readJSON (path) {
	return JSON.parse(read(path));
}
function compileMainTemplate () {
	var mainTemplateText = read('../views/main.html');
	fromDisk.headCSS = read('../build/stylesheets/head.css');
	fromDisk.mainTemplate = Hogan.compile(mainTemplateText);
	fromDisk.configPageJSON = readJSON('../conf/page.json');
	fromDisk.switches = read('../conf/switches.json');
	fromDisk.es6ModuleLoader = read('../jspm_packages/es6-module-loader.src.js');
	fromDisk.systemJs = read('../jspm_packages/system.src.js');
	fromDisk.systemJsAppConfig = read('../jspm_packages/github/guardian/frontend@master/systemjs-config.js');
	fromDisk.systemJsNormalize = read('../jspm_packages/github/guardian/frontend@master/systemjs-normalize.js');
	var frontBodyTemplateText = read('../views/front-body.html');
	fromDisk.frontBodyTemplate = Hogan.compile(frontBodyTemplateText);
	jspm.bundleSFX('static/javascripts/main.js', '../build/javascripts/main.js', {
		mangle: false,
		sourceMaps: false
	}).then(function (res) {
		console.log(res)
	}).catch(function (ex) {
		console.log(ex)
	});
}

exports.front = function (pressed) {
	console.log('pressed', Object.keys(pressed));
	console.log('seodata', Object.keys(pressed.seoData));
	console.log('properties', Object.keys(pressed.frontProperties));
	console.log('collections', Object.keys(pressed.collections));
	// TODO don't do it on every request
	compileMainTemplate();
	return fromDisk.mainTemplate.render({
		path: '/' + pressed.id,
		title: pressed.seoData.title,
		description: pressed.seoData.description,
		headCSS: fromDisk.headCSS,
		projectName: 'facia',
		cssLink: '/static/stylesheets/facia.css',
		config: {
			page: JSON.stringify(fromDisk.configPageJSON),
			switches: fromDisk.switches
		},
		inline: {
			es6ModuleLoader: fromDisk.es6ModuleLoader,
			systemJs: fromDisk.systemJs,
			systemJsAppConfig: fromDisk.systemJsAppConfig,
			systemJsNormalize: fromDisk.systemJsNormalize
		},
		bodyClasses: '',
		navigationClasses: '',
		year: (new Date()).getFullYear(),
		frontClasses: ''
	}, {
		head: '',
		body: fromDisk.frontBodyTemplate,
		signposting: '',
		breadcrumb: ''
	});
};
