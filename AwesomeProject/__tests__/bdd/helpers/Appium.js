import wd from 'wd';

const SERVER_PORT = 4723;
const SERVER_URL = '0.0.0.0';
const CAPABILITIES = {
    platformName: 'Android',
    deviceName: 'Android Emulator',
    app: 'C:\\Android\\APK\\AwesomeProject-signed.apk'
};

export const SetUpAndroidDriver = async () => {
    var driver = wd.promiseChainRemote(SERVER_URL, SERVER_PORT);
    await driver.init(CAPABILITIES);
    await driver.sleep(5000);
    return driver;
}

export const TearDownDriver = async (driver) => {
    await driver.quit();
}
