import { Builder } from 'selenium-webdriver'

import * as GoogleHomePage from './GoogleHome.POM';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

// describe(name, fn) creates a block that groups together several related tests.
describe('Google Search', () => {
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
  test('Submit form with text', async () => {

    // Arrange: Define the text to search for
    var text = 'TimothyCope.com';

    // Act: Enter the text and submit the form
    await GoogleHomePage.searchFor(driver, text);

    // Assert: Ensure the expected result is listed
    var expected = 'https://www.google.com/search?';
    var actual = await driver.getCurrentUrl();
    expect(actual).toContain(expected);
    
  });

});
