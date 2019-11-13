import { By, until, WebDriver } from 'selenium-webdriver'
import * as Appium from '../helpers/Appium'
import * as Selenium from '../helpers/Selenium'
import * as TestData from '../helpers/TestData'

//#region Properties

export const relativeUrl = '/';

//#endregion

//#region Mobile Selectors

/** <textView>Open up App.js to start working on your app!</textview> */
export const textGetStarted = async (driver) => {
    var element = await driver.elementByXPath('//*[@text="Open up App.js to start working on your app!"]');
    return element;
};

//#endregion

//#region Web Selectors

/** Google logo */
export const imgLogo = async (driver) => {
    var element = await driver.findElement(By.id('hplogo'));
    return element;
};

//#endregion

//#region Functions

/**
 * Checks if the element is displayed on this page.
 * @param {*} driver The WebDriver
 * @param {string} element The element's name as it appears in _this_ POM
 */
export const isDisplayed = async (driver, element) => {
    var webElement = await this[element](driver);
    var displayed = await webElement.isDisplayed();
    return displayed;
}

//#endregion
