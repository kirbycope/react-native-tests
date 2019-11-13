import { Builder } from 'selenium-webdriver'
import * as TestData from './TestData'
require('chromedriver')

/**
 * Sets up the WebDriver for Chrome; creating a session and launching the web browser.
 */
export const SetUpChromeDriver = async () => {
    var driver = await new Builder().forBrowser(TestData.Selenium_Browser).build();
    return driver;
}

/**
 * Closes the WebDriver and all associated windows.
 */
export const TearDownDriver = async (driver) => {
    await driver.quit();
}

/**
 * Navigates to the URL in the web browser.
 * @param {*} driver 
 * @param {string} page 
 */
export const OpenPage = async (driver, page) => {
    await driver.get(page);
}
