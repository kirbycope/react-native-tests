import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

const SERVER_PORT = 4723;
const SERVER_URL = '0.0.0.0';
const CAPABILITIES = {
    platformName: 'Android',
    deviceName: 'Android Emulator',
    app: 'C:\\Android\\APK\\AwesomeProject-signed.apk'
};

// describe(name, fn) creates a block that groups together several related tests.
describe('SomeComponent', () => {
    let driver;

    // Before all tests run the following...
    beforeAll(async () => {
        try {
            driver = wd.promiseChainRemote(SERVER_URL, SERVER_PORT);
            await driver.init(CAPABILITIES);
            await driver.sleep(2000);
        } catch (err) {
            console.log(err);
        }
    });

    // After all tests run the following...
    afterAll(async () => {
        try {
            await driver.quit();
        } catch (err) {
            console.error(err);
        }
    });

    // Test
    test('Tests something', async () => {
        // Do stuff
    });

});