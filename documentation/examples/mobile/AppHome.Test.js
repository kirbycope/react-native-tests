import wd from 'wd'

import { CAPABILITIES, SERVER_PORT, SERVER_URL } from './Appium.Settings';
import * as AppHomePage from './AppHome.POM';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

// describe(name, fn) creates a block that groups together several related tests.
describe('App Home', () => {
    let driver;

    // Before all tests run the following...
    beforeAll(async () => {
        try {
            driver = wd.promiseChainRemote(SERVER_URL, SERVER_PORT);
            await driver.init(CAPABILITIES);
            await driver.sleep(2500);
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
    test('Verify content', async () => {
        
        // Arrange: Define the text of the element to find
        var text = 'Open up App.js to start working on your app!';

        // Act: Look for the element
        var textGetStarted = await AppHomePage.textGetStarted(driver);
        
        // Assert: Ensure the Text value is expected
        var expected = 'Open up App.js to start working on your app!';
        var acutal = await driver.text(textGetStarted);
        expect(acutal).toBe(expected);
    });

});
