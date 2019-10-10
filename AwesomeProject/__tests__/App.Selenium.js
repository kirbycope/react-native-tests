import { Builder } from 'selenium-webdriver'

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

const Base_URL = 'https://www.google.com/';

// describe(name, fn) creates a block that groups together several related tests.
describe('SomeComponent', () => {
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
  test('Tests something', async () => {
    await driver.get(Base_URL);
  });

});
