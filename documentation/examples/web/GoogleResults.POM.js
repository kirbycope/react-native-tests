import { By } from 'selenium-webdriver'

//#region Selector(s)

export const aFirstResult = async (driver) => {
    var element = await driver.findElement(By.xpath('//h3[text()="Timothy Cope - Home"]'));
    return element;
};

//#endregion
