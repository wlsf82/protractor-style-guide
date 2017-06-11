var ProtractorMenuPage = function() {

  // Declare all the page object public elements in the constructor.
  this.quickStartMenuLink = element(by.id('drop1'));
  this.tutorialLinkFromQuickStart = element.all(by.css('.dropdown.open ul li a')).first();

  this.protractorSetupLink = element(by.id('drop2'));
  this.settingUpProtractorLink = element.all(by.css('.dropdown.open ul li a')).first();
  this.settingUpTheSeleniumServerLink = element(by.css('.dropdown.open .dropdown-menu li:nth-child(2) a'));
  this.settingUpTheBrowserLink = element(by.css('.dropdown.open .dropdown-menu li:nth-child(3) a'));
  this.choosingAFrameworkLink = element.all(by.css('.dropdown.open ul li a')).last();

  this.protractorTestsLink = element(by.id('drop3'));
  this.gettingStartedLink = element.all(by.css('.dropdown.open ul li a')).first();
  this.tutorialLinkFromProtractorTests = element(by.css('.dropdown.open .dropdown-menu li:nth-child(2) a'));
  this.workingWithSpecAndConfigFilesLink = element(by.css('.dropdown.open .dropdown-menu li:nth-child(3) a'));
  this.settingUpTheSystemUnderTestLink = element(by.css('.dropdown.open .dropdown-menu li:nth-child(4) a'));
  this.usingLocatorsLink = element(by.css('.dropdown.open .dropdown-menu li:nth-child(5) a'));
  this.usingPageObjectsToOrganizeTestsLink = element(by.css('.dropdown.open .dropdown-menu li:nth-child(6) a'));
  this.debuggingProtractorTestsLink = element.all(by.css('.dropdown.open ul li a')).last();

  this.referenceLink = element(by.id('drop4'));
  this.configuratinFileReferenceLink = element.all(by.css('.dropdown.open ul li a')).first();
  this.protractorApiLink = element(by.css('.dropdown.open .dropdown-menu li:nth-child(2) a'));
  this.styleGuideLink = element(by.css('.dropdown.open .dropdown-menu li:nth-child(3) a'));
  this.protractorSyntaxVsWebdriverjsSyntaxLink = element(by.css('.dropdown.open .dropdown-menu li:nth-child(4) a'));
  this.browserSupportLink = element(by.css('.dropdown.open .dropdown-menu li:nth-child(5) a'));
  this.pluginsLink = element(by.css('.dropdown.open .dropdown-menu li:nth-child(6) a'));
  this.timeoutsLink = element(by.css('.dropdown.open .dropdown-menu li:nth-child(7) a'));
  this.theWebdriverControlFlowLink = element(by.css('.dropdown.open .dropdown-menu li:nth-child(8) a'));
  this.usingTypeScript = element(by.css('.dropdown.open .dropdown-menu li:nth-child(9) a'));
  this.usingAsyncAwait = element(by.css('.dropdown.open .dropdown-menu li:nth-child(10) a'));
  this.howItWorksLink = element(by.css('.dropdown.open .dropdown-menu li:nth-child(11) a'));
  this.upgradingToJasmine2Link = element(by.css('.dropdown.open .dropdown-menu li:nth-child(12) a'));
  this.mobileSetupLink = element(by.css('.dropdown.open .dropdown-menu li:nth-child(13) a'));
  this.faqLink = element.all(by.css('.dropdown.open ul li a')).last();

};

// The below line of code is an example of the following Protractor's style guide rule:
// Use a single module.exports at the end of the page object file
module.exports = ProtractorMenuPage;
