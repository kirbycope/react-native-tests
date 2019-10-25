import { defineFeature, loadFeature } from 'jest-cucumber';

import * as Selenium from '../helpers/Selenium'

const feature = loadFeature('./__tests__/bdd/features/App.Home.feature');

defineFeature(feature, test => {

    test('Open Home page', ({ given, when, then }) => {

        let device;
        let driver;

        given(/^I am an end-user on (.*)$/, async (p0) => {
            device = p0;
            if (device === 'android') {
                console.log('ToDo: Open page on android.');
            }
            else if (device === 'chrome') {
                driver = await Selenium.SetUpChromeDriver();
            }
        });

        when('I open the Home page', async () => {
            if (device === 'android') {
                console.log('ToDo: Open the Home page on android.');
            }
            else if (device === 'chrome') {
                await Selenium.OpenPage(driver, 'https://www.google.com/');
            }
        });

        then(/^I should see (.*)$/, async (element) => {
            if (device === 'android') {
                console.log('ToDo: Assert element ' + element + ' is displayed on android.');
            }
            else if (device === 'chrome') {
                console.log('ToDo: Assert element ' + element + ' is displayed in chrome.');
                await Selenium.TearDownChromeDriver(driver);
            }
        });

    });
});
