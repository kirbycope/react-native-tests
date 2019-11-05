import { By, until, WebDriver } from 'selenium-webdriver'

//#region Properties

export const url = 'https://www.google.com/';

//#endregion

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
    // Open the page
    await driver.get(url);
    // Input some text
    var input = await inputQuery(driver);
    await input.sendKeys(text);
    // Click out of input to dismiss the auto-suggestion <span> covering the submit button
    var img = await imgLogo(driver);
    await img.click();
    // Click the submit button
    var submit = await buttonSubmit(driver);
    submit.click();
    // Wait a moment for results to load
    await driver.wait(until.urlContains("search?"), 2500);
}

//#endregion
