import { By, until, WebDriver } from 'selenium-webdriver'

//#region Selectors

export const imgLogo = async (driver) => {
    var element = await driver.findElement(By.id('hplogo'));
    return element;
};

export const inputQuery = async (driver) => {
    var element = await driver.findElement(By.css('input[name="q"]'));
    return element;
};

export const buttonSubmit = async (driver) => {
    var element = await driver.findElements(By.xpath('//input[@value="Google Search"]'));
    return element[1];
};

//#endregion

//#region Functions

/**
 * Searches for the given text on Google.
 * @param { WebDriver} driver The WebDriver associated with the Test.
 * @param { string } text The text to search for.
 */
export const searchFor = async (driver, text) => {
    await driver.get(url);
    await inputQuery(driver).sendKeys(text);
    await imgLogo(driver).click();
    await buttonSubmit(driver).click();
    await driver.wait(until.urlContains("search?"), 2500);
}

//#endregion
