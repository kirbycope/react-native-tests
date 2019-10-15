import { By, WebDriver } from 'selenium-webdriver'

// Properties
export const url = 'https://www.google.com/';

// Selectors

export const imgLogo = By.id('hplogo');
export const inputQuery = By.css('input[name="q"]');
export const buttonSubmit = By.xpath('//input[@value="Google Search"]');

// Functions

/**
 * Searches for the given text on Google.
 * @param { WebDriver} driver The WebDriver associated with the Test.
 * @param { string } text The text to search for.
 */
export const searchFor = async (driver, text) => {
    // Open the page
    await driver.get(url);
    // Input some text
    await driver.findElement(inputQuery).sendKeys(text);
    // Click out of input to dismiss the auto-suggestion <span> covering the submit button
    await driver.findElement(imgLogo).click();
    // There are two buttons that are almost identical, find them
    var submitButtons = await driver.findElements(buttonSubmit);
    // Click the second one
    await submitButtons[1].click();
}
