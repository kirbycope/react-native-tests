import { defineFeature, loadFeature } from 'jest-cucumber';
import * as CommonSteps from '../steps/Common.steps'
import * as AppHomePage from '../poms/AppHome.POM';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

const feature = loadFeature('./__tests__/bdd/features/App.Home.feature');

defineFeature(feature, test => {

    /** The WebDriver for a scenario */
    let driver;

    // After each scenario, tear down the WebDriver
    afterEach(async () => {
        await CommonSteps.TearDown(driver);
    });

    // Scenario Outline: Open Home page
    test('Open Home page', ({ given, when, then }) => {
        
        // Given I am an end-user on <device>
        given(/^I am an end-user on (.*)$/, async (device) => {
            driver = await CommonSteps.IAmAnEndUserOnDevice(device);
        });

        // When I open the <pageName> page
        when(/^I open the (.*) page$/, async () => {
            await CommonSteps.IOpenPage(driver, 'Home');
        });

        // Then I should see <element>
        then(/^I should see (.*)$/, async (element) => {
            var displayed = await AppHomePage.isDisplayed(driver, element);
            expect(displayed).toBe(true);
        });

    });
});
