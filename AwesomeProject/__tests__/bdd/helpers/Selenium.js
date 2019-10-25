import { Builder } from 'selenium-webdriver'

export const SetUpChromeDriver = async () => {
    var driver = await new Builder().forBrowser('chrome').build();
    return driver;
}

export const TearDownChromeDriver = async (driver) => {
    await driver.quit();
}

export const OpenPage = async (driver, page) => {
    await driver.get(page);
}