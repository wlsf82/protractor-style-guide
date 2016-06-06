'use strict';

// The below line of code is an example of the following Protractor's style guide rule:
// Require all the modules at the top.
var APIPage = require('../page-objects/api.page');

describe('a test to examplify the Protractor\'s style guide', function() {

  // The below line of code is an example of the following Protractor's style guide rule:
  // Instantiate all page objects at the beginning of the test suite
  var apiPage = new APIPage();

  // The below function code is an example of the following Protractor's style guide rule:
  // Navigate to the page under test before each test.
  beforeEach(function() {
    // Arange:
    browser.get('#/api');
  });

  it('perform a search', function() {
    // Act:
    // The below code is an example of the following Protractor's style guide rule:
    // Use Page Objects to interact with page under test
    apiPage.searchField.sendKeys('repeater');
    apiPage.firstSidebarLink.click();

    // Assert:
    expect(apiPage.apiSearchedTitle.getText()).toContain('by.repeater');
  });

});
