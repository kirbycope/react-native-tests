import * as Appium from '../helpers/Appium'
import * as Selenium from '../helpers/Selenium'
import * as TestData from '../helpers/TestData'

/** Sets up the appropriate WebDriver for the given device */
export const IAmAnEndUserOnDevice = async (device) => {
    if (device === 'android') {
        driver = await Appium.SetUpAndroidDriver();
    }
    else if (device === 'chrome') {
        driver = await Selenium.SetUpChromeDriver();
    }
    else {
        throw "NotImplementedException";
    }
    return driver;
};

/** Opens the given page */
export const IOpenPage = async (driver, page) => {
    // Appium
    if (driver["_events"]) {
        if (page === 'Home') {
            driver.sleep(2500);
        }
        else {
            throw "NotImplementedException";
        }
    }
    // Selenium
    else if (driver['executor_']) {
        if (page === 'Home') {
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

/** Tears down a driver after a scenario */
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
    await Selenium.TearDownDriver(driver);
}
