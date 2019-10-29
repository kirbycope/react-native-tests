# react-native-tests
React Native testing, using Cucumber, for both Mobile and Web.

## Required Software
1. Download and install [VS Code](https://code.visualstudio.com/)
    * Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.
1. Download and install [NodeJs](https://nodejs.org/en/)
    * Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
1. Download and install [Android Studio](https://developer.android.com/studio)
    * Android Studio provides the fastest tools for building apps on every type of Android device.
1. (OSX Only) Install [XCode](https://apps.apple.com/us/app/xcode/id497799835?mt=12) from the Apple Store
    * Xcode 11 includes everything you need to create amazing apps and to bring your apps to even more devices.
1. (OSX Only) Install [XCode Command-line Tools](https://developer.apple.com/downloads)
    * The Command Line Tools Package is a small self-contained package available for download separately from Xcode and that allows you to do command line development in macOS.
1. Download and install [Appium Desktop](https://github.com/appium/appium-desktop/releases/latest)
    * Appium is an open source test automation framework for use with native, hybrid and mobile web apps.

## Initial Setup

### Setup Android Emulator
An [Android Virtual Device](https://developer.android.com/studio/run/managing-avds) (AVD) is a configuration that defines the characteristics of an Android phone, tablet, Wear OS, Android TV, or Automotive OS device that you want to simulate in the Android Emulator. The AVD Manager is an interface you can launch from Android Studio that helps you create and manage AVDs.
1. Set your [environment variables](https://developer.android.com/studio/command-line/variables)
    * ANDROID_HOME: path to the sdk folder
    * ANDROID_SDK_ROOT: path to the sdk folder
1. Open Android Studio
1. Create an [Android Virtual Device](https://developer.android.com/studio/run/managing-avds#createavd)
1. Start the AVD
   * The Android Emulator can be launched via command line, `emulator -avd avd_name [ {-option [value]} … ]`
      * For example, `C:\Android\SDK\emulator\emulator.exe -avd Nexus_5X_API_29_x86`
   * Or, Use the AVD Manager in Android Studio to lauch via a GUI

#### Start Appium Server
1. Open Appium Desktop
1. Select 'Start Server'

##### Save Capabilities
1. Click the '🔍' (Start Inspector Session) button in the toolbar
1. Click the '🖉' (Edit Raw JSON`) button in the 'JSON Representation' pane
1. Update the content to include (change the app path as needed)
    ```json
    {
        "platformName": "Android",
        "deviceName": "Android Emulator",
        "app": "C:\\Android\\APK\\AwesomeProject-signed.apk"
    }
    ```
1. Save your configuration

##### Setup Device
1. Select 'Start Session'
   * This will sideload the app and steup the phone for testing with Appium
1. Select 'X' (Quit Session & Close Inspector)
1. Close the Insepctor window

### Setup Selenium WebDriver
You will need to download additional components to work with each of the major browsers. The drivers for Chrome, Firefox, and Microsoft's IE and Edge web browsers are all standalone executables that should be placed on your system [PATH](http://en.wikipedia.org/wiki/PATH_%28variable%29). Apple's safaridriver is shipped with Safari 10 for OS X El Capitan and macOS Sierra. You will need to enable Remote Automation in the Develop menu of Safari 10 before testing.
1. Download `chromedriver` from [Google](https://sites.google.com/a/chromium.org/chromedriver/downloads)
1. Unarchive the chromedriver and add its directory to your env::PATH variable

## Writing Tests

### Gherkin
> Gherkin is a set of grammar rules that makes plain text structured enough for Cucumber to understand. ... Gherkin documents are stored in .feature text files and are typically versioned in source control alongside the software. -
 [cucumber.io](https://cucumber.io/docs/guides/overview/#what-is-gherkin)

#### Gherkin (.feature) Example
```gherkin
...
Scenario: Breaker guesses a word
    Given the Maker has chosen a word
    When the Breaker makes a guess
    Then the Maker is asked to score
...
```

#### Writing better Gherkin
See the guide '[Writing better Gherkin](https://cucumber.io/docs/bdd/better-gherkin/)' from cucumber.io.

 ### Step Definitions
> Step definitions connect Gherkin steps to programming code. A step definition carries out the action that should be performed by the step. So step definitions hard-wire the specification to the implementation. -
 [cucumber.io](https://cucumber.io/docs/guides/overview/#what-are-step-definitions)

 #### Step Definition (.js) Example
```javascript
...
given('the Maker has chosen a word', async () => {
    // some code
}
...
 ```

### Executing Tests
Run the command, `npm run test`
