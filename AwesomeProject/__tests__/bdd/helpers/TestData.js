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

/** The Base URL of the web application under test */
export const Selenium_BaseUrl = 'https://google.com';

/** The browser to test with */
export const Selenium_Browser = 'chrome';

//#endregion
