
//#region Selectors

export const textGetStarted = async (driver) => {
    var element = await driver.elementByXPath('//*[@text="Open up App.js to start working on your app!"]');
    return element;
};

//#endregion
