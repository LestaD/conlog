# conlog
Simple colorful logger for node.js console

  [![NPM](https://nodei.co/npm/conlog.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/conlog/)
  
  ![Mocha Testing](https://img.shields.io/badge/build-passing-brightgreen.svg)
  ![Dependencies](https://david-dm.org/lestad/conlog.svg)
  [![npm version](https://badge.fury.io/js/conlog.svg)](http://badge.fury.io/js/conlog)
  
## Using

```javascript
var __c = require('./index')('test');

"Info only message".info();
"Debug information".debug();
"Warning message".warn();
"RED ERROR!".error();
"Simple log".log();
"Indented text".li();

__c.empty(2);
__c.name('update');

__c.disable();
"Run %s".log("Forrest");
"Test with %s arguments from %s %s".debug('many', 'log', 'function');

"".empty();

__c.enable();
"Start log in %s environment".log("debug");
"%s listening on %s port".info("Express", "1240");


```

Result:
```
06 May 01:44:37 [test] Info only message
     debug      [test] Debug information
06 May 01:44:37 [test] Warning! Warning message
06 May 01:44:37 [test] RED ERROR!
06 May 01:44:37 [test] Simple log
                [test] Indented text


06 May 01:44:37 [update] Run Forrest
     debug      [update] Test with many arguments from log function

06 May 01:44:37 [update] Start log in debug environment
06 May 01:44:37 [update] Express listening on 1240 port
```

You can use attributes from [Colors](https://www.npmjs.com/package/colors):
```javascript
"Using:".log();
"help".green.li();
"exit".green.li();
"quit".green.li();
```

And you can use `%s` template:
```javascript
"Start log in %s environment".log("debug");
"%s listening on %s port".info("Express", "1240");
```

Shows n empty lines:
```javascript
var __c = require('conlog')('appname');

// three empty lines
__c.empty(3);
// equal with
"".empty(3); // or any string

// shows one empty string
"".empty(); // or __c.empty();

```

## Options

You can change the app name if you want:
```javascript
var __c = require('conlog')('appname');

__c.name('newappname');
```

You can disable and enable color output:
```javascript
var enablecolors = true;
var __c = require('conlog')('appname', enablecolors);

"Hello %s".log('world');

__c.disable();

"Specify log info".info();
"Warning".warn();
"Error".error();

__c.enable();

"Colorful text".log();
```


