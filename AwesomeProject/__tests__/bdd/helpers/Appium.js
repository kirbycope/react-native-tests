import wd from 'wd';
import * as TestData from './TestData'

/**
 * Sets up the WebDriver for Android; creating a session and lauching the app.
 */
export const SetUpAndroidDriver = async () => {
    var driver = wd.promiseChainRemote(TestData.Appium_ServerUrl, TestData.Appium_ServerPort);
    await driver.init(TestData.Appium_Capabilities);
    await driver.sleep(5000);
    return driver;
}

/**
 * Ends the WebDriver session and closes the app.
 * @param {*} driver The WebDriver
 */
export const TearDownDriver = async (driver) => {
    await driver.quit();
}
