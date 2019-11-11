# react-native-tests
React Native testing, using Jest and Cucumber, with examples for both Mobile and Web.

![Alt text](/../master/react-native-tests.png?raw=true "react-native-tests")

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

### Install Dependencies
1. Open the command prompt
    * In Visual Studio Code the shortcut is [Ctrl]+[Shift]+[C]
    * To switch to the project folder, run the command `cd AwesomeProject`
1. To install the packages, run the command `npm install`
    * Running this command without any arguments will cause npm to install packages from the [package.json](https://docs.npmjs.com/files/package.json) (under "dependencies" and "devDependencies") to the `AwesomeProject/node_modules` directory
1. (Optional) To automatically fix vulnerabilities, run the command `npm audit fix`

### Build the App Under Test
This repo includes the [AwesomeProject](https://facebook.github.io/react-native/docs/getting-started). Follow the Expo guide for [building standalone apps](https://docs.expo.io/versions/latest/distribution/building-standalone-apps/)

### Running Tests Against the App
1. Open the command prompt
    * In Visual Studio Code the shortcut is [Ctrl]+[Shift]+[C]
    * To switch to the project folder, run the command `cd AwesomeProject`
1. To execute tests, run the command `npm run test`
