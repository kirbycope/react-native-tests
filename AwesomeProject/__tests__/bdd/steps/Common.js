import * as Appium from '../helpers/Appium'
import * as Selenium from '../helpers/Selenium'
import * as TestData from '../helpers/TestData'

/** Sets up the appropriate WebDriver for the given device */
export const IAmAnEndUserOnDevice = async (device) => {
    if (device.toLowerCase() === 'android') {
        return await Appium.SetUpAndroidDriver();
    }
    else if (device.toLowerCase() === 'chrome') {
        return await Selenium.SetUpChromeDriver();
    }
    else {
        throw "NotImplementedException";
    }
};

/** Opens the given page */
export const IOpenPage = async (driver, page) => {
    // Appium
    if (driver["_events"]) {
        if (page.toLowerCase() === 'home') {
            await driver.sleep(2500);
        }
        else {
            throw "NotImplementedException";
        }
    }
    // Selenium
    else if (driver['executor_']) {
        if (page.toLowerCase() === 'home') {
            await Selenium.OpenPage(driver, TestData.Selenium_BaseUrl + '/');
        }
        else {
            throw "NotImplementedException";
        }
    }
    else {
        throw "NotImplementedException";
    }
};

/** Tears down a WebDriver after a scenario */
export const TearDown = async (driver) => {
    // Appium
    if (driver["_events"]) {
        await Appium.TearDownDriver(driver);
    }
    // Selenium
    else if (driver['executor_']) {
        await Selenium.TearDownDriver(driver);
    }
    else {
        throw "NotImplementedException";
    }
}
