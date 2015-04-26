# conlog
Simple colorful logger for node.js console

  [![NPM](https://nodei.co/npm/conlog.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/conlog/)

```javascript
var __c = require('./index')('test');

"Info only message".info();
"Debug information".debug();
"Warning message".warn();
"RED ERROR!".error();
"Simple log".log();
"Indented text".li();
```

You can use attributes from [Colors](https://www.npmjs.com/package/colors):
```javascript
"Using:".log();
"help".green.li();
"exit".green.li();
"quit".green.li();
```

An you can use `%s` template:
```javascript
"Start log in %s environment".log("debug");
"%s listening on %s port".info("Express", "1240");
```
