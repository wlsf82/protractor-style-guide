'use strict';

// Require all the modules at the top.
var ChokoPage = require('../pages/choko.page');

describe('Choko login', function() {

  // Instantiate all page objects at the beginning of the test suite
  var chokoPage = new ChokoPage();

  beforeEach(function() {
    // Arange:
    // Navigate to the page under test before each test.
    browser.get('http://choko.org/sign-in');
  });

  it('invalid login', function() {
    // Act:
    // Use Page Objects to interact with page under test
    chokoPage.login('invalid-user', 'invalid-password');

    // Assert:
    expect(chokoPage.errorMessage.isDisplayed()).toBe(true);
  });

  it('try to login with empty fields', function() {
    // Act:
    // Use Page Objects to interact with page under test
    chokoPage.login('', '');

    // Assert:
    expect(chokoPage.errorMessage.isDisplayed()).toBe(true);
  });

});
