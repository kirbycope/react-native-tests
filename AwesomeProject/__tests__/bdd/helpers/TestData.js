//#region Appium

/** The Port # for Appium Server */
export const Appium_ServerPort = 4723;

/** The URL for the Appium Server */
export const Appium_ServerUrl = '0.0.0.0';

/** The DesiredCapabilities for the Appium Server session */
export const Appium_Capabilities = {
    platformName: 'Android',
    deviceName: 'Android Emulator',
    app: 'C:\\Android\\APK\\AwesomeProject-signed.apk'
}

//#endregion

//#region Selenium

/** The browser to test with */
export const Selenium_Browser = 'chrome';

/** The <html> content to load in the Selenium example */
export const Selenium_HtmlContent = "data:text/html;charset=utf-8,<html><head></head><body><div>Open up App.js to start working on your app!</div></body></html>";

//#endregion
