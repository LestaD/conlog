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
