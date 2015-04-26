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

	var string = time() + ' ' + name + _this;

	console.log.apply(console, [string].concat(Array.prototype.slice.call(arguments)));

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

	var string = time() + ' ' + name + _this;
	console.error.apply(console, [string].concat(Array.prototype.slice.call(arguments)));

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

	var string = time() + ' ' + name + _this;
	console.warn.apply(console, [string].concat(Array.prototype.slice.call(arguments)));

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

	var string = time() + ' ' + name + _this;
	console.info.apply(console, [string].concat(Array.prototype.slice.call(arguments)));

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

	var string = '     debug     '.gray + ' ' + name + _this;
	console.log.apply(console, [string].concat(Array.prototype.slice.call(arguments)));

	return this;
};


String.prototype.li = function() {
	var _this = String(this);
	var name = String(appname ? ( '[' + appname + '] ') : '');

	var string = '               '.black + ' ' + name.black + _this;
	console.log.apply(console, [string].concat(Array.prototype.slice.call(arguments)));

	return this;
};


