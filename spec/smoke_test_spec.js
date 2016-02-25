'use strict';

// The below line of code is an example of the following Protractor's style guide rule:
// Require all the modules at the top.
var ProtractorMenuPage = require('../pages/protractor_menu.page');

// The below tests are an example of the following Protractor's style guide rule:
// Have a suite that navigates through the major routes of the app
describe('Protractor smoke test', function() {

  // The below line of code is an example of the following Protractor's style guide rule:
  // Instantiate all page objects at the beginning of the test suite
  var protractorMenuPage = new ProtractorMenuPage();

  // The below function code is an example of the following Protractor's style guide rule:
  // Navigate to the page under test before each test.
  beforeEach(function() {
    // Arange:
    browser.get('#');
  });

  it('navigate to tutorial from Quick Start menu', function() {
    // Act:
    protractorMenuPage.quickStartMenuLink.click();
    protractorMenuPage.tutorialLinkFromQuickStart.click();

    // Assert:
    browser.getCurrentUrl().then(function(url) {
      var expectedUrl = '/protractor/#/tutorial';
      expect(url).toContain(expectedUrl);
    });
  });

  it('navigate to setting up protractor', function() {
    // Act:
    protractorMenuPage.protractorSetupLink.click();
    protractorMenuPage.settingUpProtractorLink.click();

    // Assert:
    browser.getCurrentUrl().then(function(url) {
      var expectedUrl = '/protractor/#/protractor-setup';
      expect(url).toContain(expectedUrl);
    });
  });

  it('navigate to setting up the selenium server', function() {
    // Act:
    protractorMenuPage.protractorSetupLink.click();
    protractorMenuPage.settingUpTheSeleniumServerLink.click();

    // Assert:
    browser.getCurrentUrl().then(function(url) {
      var expectedUrl = '/protractor/#/server-setup';
      expect(url).toContain(expectedUrl);
    });
  });

  it('navigate to setting up the browser', function() {
    // Act:
    protractorMenuPage.protractorSetupLink.click();
    protractorMenuPage.settingUpTheBrowserLink.click();

    // Assert:
    browser.getCurrentUrl().then(function(url) {
      var expectedUrl = '/protractor/#/browser-setup';
      expect(url).toContain(expectedUrl);
    });
  });

  it('navigate to choosing a framework', function() {
    // Act:
    protractorMenuPage.protractorSetupLink.click();
    protractorMenuPage.choosingAFrameworkLink.click();

    // Assert:
    browser.getCurrentUrl().then(function(url) {
      var expectedUrl = '/protractor/#/frameworks';
      expect(url).toContain(expectedUrl);
    });
  });

  it('navigate to getting started', function() {
    // Act:
    protractorMenuPage.protractorTestsLink.click();
    protractorMenuPage.gettingStartedLink.click();

    // Assert:
    browser.getCurrentUrl().then(function(url) {
      var expectedUrl = '/protractor/#/getting-started';
      expect(url).toContain(expectedUrl);
    });
  });

  it('navigate to tutorial from Protractor Tests menu', function() {
    // Act:
    protractorMenuPage.protractorTestsLink.click();
    protractorMenuPage.tutorialLinkFromProtractorTests.click();

    // Assert:
    browser.getCurrentUrl().then(function(url) {
      var expectedUrl = '/protractor/#/tutorial';
      expect(url).toContain(expectedUrl);
    });
  });

  it('navigate to working with spec and config files', function() {
    // Act:
    protractorMenuPage.protractorTestsLink.click();
    protractorMenuPage.workingWithSpecAndConfigFilesLink.click();

    // Assert:
    browser.getCurrentUrl().then(function(url) {
      var expectedUrl = '/protractor/#/api-overview';
      expect(url).toContain(expectedUrl);
    });
  });

  it('navigate to setting up the system under test', function() {
    // Act:
    protractorMenuPage.protractorTestsLink.click();
    protractorMenuPage.settingUpTheSystemUnderTestLink.click();

    // Assert:
    browser.getCurrentUrl().then(function(url) {
      var expectedUrl = '/protractor/#/system-setup';
      expect(url).toContain(expectedUrl);
    });
  });

  it('navigate to using locators', function() {
    // Act:
    protractorMenuPage.protractorTestsLink.click();
    protractorMenuPage.usingLocatorsLink.click();

    // Assert:
    browser.getCurrentUrl().then(function(url) {
      var expectedUrl = '/protractor/#/locators';
      expect(url).toContain(expectedUrl);
    });
  });

  it('navigate to using page objects to organize tests', function() {
    // Act:
    protractorMenuPage.protractorTestsLink.click();
    protractorMenuPage.usingPageObjectsToOrganizeTestsLink.click();

    // Assert:
    browser.getCurrentUrl().then(function(url) {
      var expectedUrl = '/protractor/#/page-objects';
      expect(url).toContain(expectedUrl);
    });
  });

  it('navigate to debuggin protractor tests', function() {
    // Act:
    protractorMenuPage.protractorTestsLink.click();
    protractorMenuPage.debuggingProtractorTestsLink.click();

    // Assert:
    browser.getCurrentUrl().then(function(url) {
      var expectedUrl = '/protractor/#/debugging';
      expect(url).toContain(expectedUrl);
    });
  });

  it('navigate to configuration file reference', function() {
    // Act:
    protractorMenuPage.referenceLink.click();
    protractorMenuPage.configuratinFileReferenceLink.click();

    // The below code is necessary because the test navigate to a non-angular page.
    browser.ignoreSynchronization = true;

    // Assert:
    browser.getCurrentUrl().then(function(url) {
      var expectedUrl = 'https://github.com/angular/protractor/blob/master/docs/referenceConf.js';
      expect(url).toEqual(expectedUrl);
    });

    // The below code is just to set ignoreSynchronization to false again.
    browser.ignoreSynchronization = false;
  });

  it('navigate to protractor api', function() {
    // Act:
    protractorMenuPage.referenceLink.click();
    protractorMenuPage.protractorApiLink.click();

    // Assert:
    browser.getCurrentUrl().then(function(url) {
      var expectedUrl = '/protractor/#/api';
      expect(url).toContain(expectedUrl);
    });
  });

  it('navigate to style guide', function() {
    // Act:
    protractorMenuPage.referenceLink.click();
    protractorMenuPage.styleGuideLink.click();

    // Assert:
    browser.getCurrentUrl().then(function(url) {
      var expectedUrl = '/protractor/#/style-guide';
      expect(url).toContain(expectedUrl);
    });
  });

  it('navigate to protractor syntax vs webdriverjs syntax', function() {
    // Act:
    protractorMenuPage.referenceLink.click();
    protractorMenuPage.protractorSyntaxVsWebdriverjsSyntaxLink.click();

    // Assert:
    browser.getCurrentUrl().then(function(url) {
      var expectedUrl = '/protractor/#/webdriver-vs-protractor';
      expect(url).toContain(expectedUrl);
    });
  });

  it('navigate to browser support', function() {
    // Act:
    protractorMenuPage.referenceLink.click();
    protractorMenuPage.browserSupportLink.click();

    // Assert:
    browser.getCurrentUrl().then(function(url) {
      var expectedUrl = '/protractor/#/browser-support';
      expect(url).toContain(expectedUrl);
    });
  });

  it('navigate to pluggins', function() {
    // Act:
    protractorMenuPage.referenceLink.click();
    protractorMenuPage.pluginsLink.click();

    // Assert:
    browser.getCurrentUrl().then(function(url) {
      var expectedUrl = '/protractor/#/plugins';
      expect(url).toContain(expectedUrl);
    });
  });

  it('navigate to timeouts', function() {
    // Act:
    protractorMenuPage.referenceLink.click();
    protractorMenuPage.timeoutsLink.click();

    // Assert:
    browser.getCurrentUrl().then(function(url) {
      var expectedUrl = '/protractor/#/timeouts';
      expect(url).toContain(expectedUrl);
    });
  });

  it('navigate to the webdriver control flow', function() {
    // Act:
    protractorMenuPage.referenceLink.click();
    protractorMenuPage.theWebdriverControlFlowLink.click();

    // Assert:
    browser.getCurrentUrl().then(function(url) {
      var expectedUrl = '/protractor/#/control-flow';
      expect(url).toContain(expectedUrl);
    });
  });

  it('navigate to how it works', function() {
    // Act:
    protractorMenuPage.referenceLink.click();
    protractorMenuPage.howItWorksLink.click();

    // Assert:
    browser.getCurrentUrl().then(function(url) {
      var expectedUrl = '/protractor/#/infrastructure';
      expect(url).toContain(expectedUrl);
    });
  });

  it('navigate to upgrade to jasmine 2.x', function() {
    // Act:
    protractorMenuPage.referenceLink.click();
    protractorMenuPage.upgradingToJasmine2Link.click();

    // Assert:
    browser.getCurrentUrl().then(function(url) {
      var expectedUrl = '/protractor/#/jasmine-upgrade';
      expect(url).toContain(expectedUrl);
    });
  });

  it('navigate to mobile setup', function() {
    // Act:
    protractorMenuPage.referenceLink.click();
    protractorMenuPage.mobileSetupLink.click();

    // Assert:
    browser.getCurrentUrl().then(function(url) {
      var expectedUrl = '/protractor/#/mobile-setup';
      expect(url).toContain(expectedUrl);
    });
  });

  it('navigate to faq', function() {
    // Act:
    protractorMenuPage.referenceLink.click();
    protractorMenuPage.faqLink.click();

    // Assert:
    browser.getCurrentUrl().then(function(url) {
      var expectedUrl = '/protractor/#/faq';
      expect(url).toContain(expectedUrl);
    });
  });

});
