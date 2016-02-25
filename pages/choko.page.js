var ChokoPage = function() {

  // The 3 below lines of code are an example of the following Protractor's style guide rule:
  // Prefer by.id and by.css when no Protractor locators are available
  this.usernameField = element(by.id('element-sign-in-username'));
  this.passwordField = element(by.id('element-sign-in-password'));
  this.signinButton = element(by.id('element-sign-in-submit'));

  // The below line of code is an example of the following Protractor's style guide rule:
  // Prefer protractor locator strategies when possible.
  this.errorMessage = element(by.repeater('error in errors'));

  // The below function code is an example of the following Protractor's style guide rule:
  // Declare page object functions for operations that require more than one step.
  this.login = function(username, password) {
    this.usernameField.sendKeys(username);
    this.passwordField.sendKeys(password);
    this.signinButton.click();
  };

};

module.exports = ChokoPage;
