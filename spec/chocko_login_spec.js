'use strict';

var ChokoPage = require('../pages/choko.page');

describe('Choko login', function() {

  var chokoPage = new ChokoPage();

  beforeEach(function() {
    // Arange:
    browser.get('http://choko.org/sign-in');
  });

  it('invalid login', function() {
    // Act:
    chokoPage.login('invalid-user', 'invalid-password');

    // Assert:
    expect(chokoPage.errorMessage.isDisplayed()).toBe(true);
  });

});
