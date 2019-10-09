# react-native-tests
React Native app with examples of Unit Test and UI tests using Jest, Selenium, and Appium.

## Required Software
1. Download and install [Android Studio](https://developer.android.com/studio)
1. (OSX Only) Install [XCode](https://apps.apple.com/us/app/xcode/id497799835?mt=12) from the Apple Store
   * Install [XCode Command-line Tools](https://developer.apple.com/downloads)
1. Download and install [VS Code](https://code.visualstudio.com/)
1. Download and install [NodeJs](https://nodejs.org/en/)
1. To install Expo, run the command `npm install expo-cli --global`
   * With [Expo](https://expo.io/) tools, services, and React, you can build, deploy, and quickly iterate on native Android, iOS, and web apps from the same JavaScript codebase.

## Creating the Project
With Expo tools, services, and React, you can build, deploy, and quickly iterate on native Android, iOS, and web apps from the same JavaScript codebase.
1. To create a new project, run the command `expo init AwesomeProject`
1. Select 'blank' by pressing [Enter]
1. Name your project by typing `AwesomeProject` and then press [Enter]

### Running the Project
1. Navigate into your new project folder by running the command `cd AwesomeProject`
1. To start the application, run the command `npm start`

#### Sideload App on Android Emulator
1. Open Android Studio
1. Create an [Android Virtual Device](https://developer.android.com/studio/run/managing-avds#createavd)
1. Start the AVD
1. Run the react app see [Running the Project](/#running-the-project)
1. Type `a` to sideload the app
1. Enable drawing over app as prompted

## Setup Jest
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

### Write Your First Test
1. Create a new folder called `__tests__`
1. Create a new file called `App.test.js`
2. Paste in the following code
    ```javascript
    import React from 'react';
    import renderer from 'react-test-renderer';

    import App from '../App';

    describe('<App />', () => {
        it('has 1 child', () => {
            const tree = renderer.create(<App />).toJSON();
            expect(tree.children.length).toBe(1);
        });
    });
    ```
3. To execute the test, run the command `npm run test`
