# react-native-tests
React Native app with examples of Unit Test and UI tests using Jest, Selenium, and Appium.

## Required Software
1. Download and install [Android Studio](https://developer.android.com/studio)
   * Set your [environment variables](https://developer.android.com/studio/command-line/variables)
      * ANDROID_HOME: path to the sdk folder
      * ANDROID_SDK_ROOT: path to the sdk folder
1. (OSX Only) Install [XCode](https://apps.apple.com/us/app/xcode/id497799835?mt=12) from the Apple Store
   * Install [XCode Command-line Tools](https://developer.apple.com/downloads)
1. Download and install [VS Code](https://code.visualstudio.com/)
1. Download and install [NodeJs](https://nodejs.org/en/)
1. To install Expo, run the command `npm install expo-cli --global`
1. Download and install [Appium Desktop](https://github.com/appium/appium-desktop/releases/latest)

## Creating the Project
With [Expo](https://expo.io/) tools, services, and React, you can build, deploy, and quickly iterate on native Android, iOS, and web apps from the same JavaScript codebase.
1. To create a new project, run the command `expo init AwesomeProject`
1. Select 'blank' by pressing [Enter]
1. Name your project by typing `AwesomeProject` and then press [Enter]

## Running the Project
1. Navigate into your new project folder by running the command `cd AwesomeProject`
1. To start the application, run the command `npm start`

## Add Jest to the Project
[Jest](https://docs.expo.io/versions/latest/guides/testing-with-jest/) is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!
1. To install Jest, run the command `npm i jest-expo --save-dev`
1. Update package.json to include:
    ```json
    "scripts": {
        "test": "jest"
    },
    "jest": {
        "preset": "jest-expo"
    }
    ```

## Add Appium to the project
[Appium](http://appium.io/) is an open source test automation framework for use with native, hybrid and mobile web apps. It drives iOS, Android, and Windows apps using the WebDriver protocol.
1. To install Appium, run the command `npm install --save-dev wd appium appium-doctor`
   * [wd](https://www.npmjs.com/package/wd) is the node.js Webdriver/Selenium 2 client.
   * [appium](https://www.npmjs.com/package/appium) is the appium server.
   * [appium-doctor](https://www.npmjs.com/package/appium-doctor) attempts to diagnose and fix common Node, iOS, and Android configuration issues before starting Appium.
1. Create a new file in `__tests__` called `App.Appium.js`
1. Paste in the following content
    ```javascript
    import wd from 'wd';

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

    const SERVER_PORT = '4444';
    const SERVER_URL = 'http://localhost';
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
    ```
1. Update `app.json` to include
    ```json
    "ios": {
      "bundleIdentifier": "com.yourcompany.yourappname"
    },
    "android": {
      "package": "com.yourcompany.yourappname"
    }
    ```

## Setup Android Emulator
An [Android Virtual Device](https://developer.android.com/studio/run/managing-avds) (AVD) is a configuration that defines the characteristics of an Android phone, tablet, Wear OS, Android TV, or Automotive OS device that you want to simulate in the Android Emulator. The AVD Manager is an interface you can launch from Android Studio that helps you create and manage AVDs.
1. Open Android Studio
1. Create an [Android Virtual Device](https://developer.android.com/studio/run/managing-avds#createavd)
1. Start the AVD
1. Run the react app see [Running the Project](/#running-the-project)
1. Type `a` to sideload the app
1. Enable drawing over app as prompted

## Start Appium Server
1. Open Appium Desktop
1. Change the port to '4444'
1. Select 'Start Server'

### Save Capabilities
1. Click the '🔍' (Start Inspector Session) button in the toolbar
1. Click the '🖉' (Edit Raw JSON`) button in the 'JSON Representation' pane
1. Update the content to include
    ```json
    {
    "platformName": "Android",
    "deviceName": "Android Emulator",
    "app": "C:\\Android\\APK\\AwesomeProject-signed.apk"
    }
    ```
1. Save your configuration

### Setup Device
1. Select 'Start Session'
   * This will sideload the app and steup the phone for testing with Appium
1. Select 'X' (Quit Session & Close Inspector)
1. Close the Insepctor window

## Build the Binary to Test
1. To create an .apk, run the command `expo build:android -t apk`
   * This requires a free Expo account
   * Let Expo handle the process when prompted
   * If you get the error `connect ECONNREFUSED 127.0.0.1:19001` then run the command `npm start` in a new command window and try again
1. Download the .apk from Expo.io
1. Replace the value for `CAPABILITIES.app` with the downloaded file path
   * (Optional) Update your Appium Desktop Inspector configuration(s)

## Run the Test
The Expo session is not needed and can be closed now if you are following along with this readme. Android studio can also be closed at this point.
<br/>The Android Emulator can be launched via command line, `emulator -avd avd_name [ {-option [value]} … ]`
<br/>For example, `C:\Android\SDK\emulator\emulator.exe -avd Nexus_5X_API_29_x86`
<br/>Note: Closing the command prompt will close the Emulator.

To execute the test, run the command `npm run test`
