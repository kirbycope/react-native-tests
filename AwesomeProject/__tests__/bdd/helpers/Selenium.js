import { Builder } from 'selenium-webdriver'
require('chromedriver')

export const SetUpChromeDriver = async () => {
    var driver = await new Builder().forBrowser('chrome').build();
    return driver;
}

export const TearDownDriver = async (driver) => {
    await driver.quit();
}

export const OpenPage = async (driver, page) => {
    await driver.get(page);
}
