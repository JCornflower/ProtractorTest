  exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome'
    },
    specs: ['spec.js'],
   framework: 'jasmine2' ,
   //getPageTimeout: 30000,
    onPrepare: function() {
        var jasmineReporters = require('C:/Users/user/Documents/GitHub/ProtractorTest/node_modules/jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true)
        );
   }
 };