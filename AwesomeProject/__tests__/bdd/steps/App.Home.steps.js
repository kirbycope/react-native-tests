import { defineFeature, loadFeature } from 'jest-cucumber';
import * as Appium from '../helpers/Appium'
import * as Selenium from '../helpers/Selenium'
import * as CommonSteps from '../steps/Common.steps'

import * as AppHomePage from '../../mobile/AppHome.POM';
import * as GoogleHomePage from '../../web/GoogleHome.POM';

const feature = loadFeature('./__tests__/bdd/features/App.Home.feature');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

defineFeature(feature, test => {

    test('Open Home page', ({ given, when, then }) => {

        let device;
        let driver;

        given(/^I am an end-user on (.*)$/, async (p0) => {
            device = p0;
            driver = await CommonSteps.IAmAnEndUserOnDevice(device);
        });

        when(/^I open the (.*) page$/, async () => {
            await CommonSteps.IOpenPage(driver, 'Home');
        });

        then(/^I should see (.*)$/, async (element) => {
            let displayed;

            if (device === 'android') {
                if (element === 'textGetStarted') {
                    var textGetStarted = await AppHomePage.textGetStarted(driver);
                    displayed = await textGetStarted.isDisplayed();
                }
                await Appium.TearDownDriver(driver);
            }
            else if (device === 'chrome') {
                if (element === 'imgLogo') {
                    var imgLogo = await GoogleHomePage.imgLogo(driver);
                    displayed = await imgLogo.isDisplayed();
                }
                await Selenium.TearDownDriver(driver);
            }
            else {
                throw "NotImplementedException";
            }
            expect(displayed).toBe(true);
        });

    });
});
