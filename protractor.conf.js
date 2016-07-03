var SpecReporter = require('jasmine-spec-reporter');

exports.config = {

  // The address of a running selenium server.
  seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',

  // Spec patterns are relative to the location of this config.
  specs: [
    'specs/smoke_test_spec.js'
  ],

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {'args': ['--disable-extensions']},

    // Saucelabs credentials
    username: process.env.SAUCELABS_USERNAME,
    accessKey: process.env.SAUCELABS_ACCESS_KEY,

    // Test suite name.
    'name': 'SemaphoreCI, SauceLabs and Protractor test suite - DEVOPS Norway'
  },

  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  baseUrl: 'http://www.protractortest.org/#/',

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 10000
  },

  // Define things that will happen before start testing.
  onPrepare: function() {
    // Add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailedSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true
    }));

    browser.driver.manage().window().maximize();
  }
};
