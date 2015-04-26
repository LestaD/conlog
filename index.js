var colors = require('colors');
var appname = false;
var colorsenabled = true;

module.exports = function(_appname, _colorsenabled) {
	if (typeof _appname === 'string') {
		appname = _appname;
	}

	if (_colorsenabled === false) {
		colorsenabled = false;
	}
}

var _monthes = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec'
];

/**
 * Correct time
 */
function time() {
	var d = new Date(),
	day = String(d.getDate()),
	hours = String(d.getHours()),
	minutes = String(d.getMinutes()),
	seconds = String(d.getSeconds());

	result = String((day.length == 1 ? '0' : '') + day + ' ' + _monthes[d.getMonth()] + ' '
					+ (hours.length == 1 ? '0' :'') + hours + ':'
					+ (minutes.length == 1 ? '0' :'') + minutes + ':'
					+ (seconds.length == 1 ? '0' :'') + seconds);

	if (colorsenabled) result = result.gray;

	return result;
}


/**
 * Log to console
 */
String.prototype.log = function() {
	var _this = String(this);
	var name = String(appname ? ( '[' + appname + '] ') : '');
	if (colorsenabled) {
		name = name.yellow;
		_this = _this.green;
	}

	console.log( time() + ' ' + name + _this);

	return this;
};


/**
 * Show error to console
 */
String.prototype.error = function() {
	var _this = String(this);
	var name = String(appname ? ( '[' + appname + '] ') : '');
	if (colorsenabled) {
		name = name.yellow;
		_this = _this.red;
	}

	console.error( time() + ' ' + name + _this);

	return this;
};


/**
 * Show warning to console
 */
String.prototype.warn = function() {
	var _this = String(this);
	var name = String(appname ? ( '[' + appname + '] ') : '');
	if (colorsenabled) {
		name = name.gray;
		_this = "Warning! ".italic.yellow + _this.yellow;
	}

	console.warn( time() + ' ' + name + _this);

	return this;
};


/**
 * Show info message to console
 */
String.prototype.info = function() {
	var _this = String(this);
	var name = String(appname ? ( '[' + appname + '] ') : '');
	if (colorsenabled) {
		name = name.gray;
		_this = _this.white;
	}

	console.info( time() + ' ' + name + _this);

	return this;
};

/**
 * Only debug log
 */
String.prototype.debug = function() {
	var _this = String(this);
	var name = String(appname ? ( '[' + appname + '] ') : '');
	if (colorsenabled) {
		name = name.gray;
		_this = _this.white;
	}

	console.log( '     debug     '.gray + ' ' + name + _this);

	return this;
};


String.prototype.li = function() {
	var _this = String(this);
	var name = String(appname ? ( '[' + appname + '] ') : '');

	console.log( '               '.black + ' ' + name.black + _this);

	return this;
};



function dummy__s1(){
	// good access logger
	var Console = require('console').Console,
		fs = require('fs'),
		fileStream = fs.createWriteStream('../access.log'),
		access = new Console(fileStream, fileStream);

	// access.log('Any', 'code', 11);
	// module.exports = access;
}