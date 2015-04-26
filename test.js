var __c = require('./index')('test');

"Info only message".info();
"Debug information".debug();
"Warning message".warn();
"RED ERROR!".error();
"Simple log".log();
"Indented text".li();



"Run %s".log("Forrest");
"Test with %s arguments from %s %s".debug('many', 'log', 'function');
