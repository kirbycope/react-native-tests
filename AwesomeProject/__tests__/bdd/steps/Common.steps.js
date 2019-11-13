import * as Appium from '../helpers/Appium'
import * as Selenium from '../helpers/Selenium'

const baseUrl = 'https://www.google.com';

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
            await Selenium.OpenPage(driver, baseUrl+'/');
        }
        else {
            await Selenium.OpenPage(driver, page);
        }
    }
    else {
        throw "NotImplementedException";
    }
}
