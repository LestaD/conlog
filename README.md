# conlog
Simple colorful logger for node.js console

```npm install conlog```

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
