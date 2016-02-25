var APIPage = function() {

  // The below code (until line 15) is an example of the following Protractor's style guide rule:
  // Declare all the page object public elements in the constructor.

  // The 2 below lines of code are an example of the following Protractor's style guide rule:
  // Prefer protractor locator strategies when possible.
  this.searchField = element(by.model('searchTerm'));
  this.firstSidebarItem = element(by.repeater('item in items').row(0));

  this.firstSidebarLink = this.firstSidebarItem.element(by.css('a'));

  // The below line of code is an example of the following Protractor's style guide rule:
  // Prefer by.id and by.css when no Protractor locators are available
  this.apiSearchedTitle = element(by.css('.api-title'));

  // The below function does not respect the unique responsability principle, but this is just an example.
  // The below function code is an example of the following Protractor's style guide rule:
  // Declare page object functions for operations that require more than one step.
  this.searchAndClickOnFirstLink = function(termToSearch) {
    this.searchField.sendKeys(termToSearch);
    this.firstSidebarLink.click();
  };

};

// The below line of code is an example of the following Protractor's style guide rule:
// Use a single module.exports at the end of the page object file
module.exports = APIPage;
