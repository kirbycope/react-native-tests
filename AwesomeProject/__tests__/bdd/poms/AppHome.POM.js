import { By } from 'selenium-webdriver'

//#region Properties

export const relativeUrl = '/';

//#endregion

//#region Selectors

/** Open up App.js to start working on your app! */
export const textGetStarted = async (driver) => {
    var xPath = '//*[text()="Open up App.js to start working on your app!"]';
    // Appium
    if (driver["_events"]) {
        return await driver.elementByXPath(xPath);
    }
    // Selenium
    else if (driver['executor_']) {
        return await driver.findElement(By.xpath(xPath));
    }
    else {
        throw "NotImplementedException";
    }
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
