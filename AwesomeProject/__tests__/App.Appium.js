import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

const SERVER_PORT = ['4723'];
const SERVER_URL = ['localhost'];
const CAPABILITIES = {
  platformName: 'Android',
  deviceName: 'Android Emulator',
  app: 'C:\\Android\\APK\\AwesomeProject-signed.apk'
};

const driver = wd.promiseChainRemote(SERVER_URL, SERVER_PORT);

describe('SomeComponent', () => {

  // Before all tests run the following...
  beforeAll(async () => {
    try {
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
    }
    catch (err) {
      console.error(err);
    }
  });

  // Test
  test('renders some use case', async () => {
    expect(await driver.hasElementByAccessibilityId('testview')).toBe(true);
  });

});
