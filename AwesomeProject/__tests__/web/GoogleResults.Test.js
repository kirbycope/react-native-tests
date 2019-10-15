import { Builder, until } from 'selenium-webdriver'

import * as GoogleHomePage from './GoogleHome.POM';
import * as GoogleResultsPage from './GoogleResults.POM';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

// describe(name, fn) creates a block that groups together several related tests.
describe('Google Results', () => {
  let driver;

  // Before all tests run the following...
  beforeAll(async () => {
    try {
      driver = new Builder()
        .forBrowser('chrome')
        .build();
    } catch (err) {
      console.log(err);
    }
  });

  // After all tests run the following...
  afterAll(async () => {
    try {
      await driver.quit();
    } catch (err) {
      console.error(err);
    }
  });

  // Test
  test('Click first result', async () => {

    // Arrange: Define the text to search for
    var text = 'timothycope.com';

    // Act: Enter the text and submit the form
    await GoogleHomePage.searchFor(driver, text);
    await driver.findElement(GoogleResultsPage.aFirstResult).click();
    await driver.wait(until.urlContains(text), 2500);

    // Assert: Ensure the current page is the expected one
    var expected = 'http://www.timothycope.com/';
    var actual = await driver.getCurrentUrl();
    expect(actual).toBe(expected);

  });

});
