const { Builder, By, until } = require("selenium-webdriver");
const puppeteer = require('puppeteer');

const chrome = require("selenium-webdriver/chrome");
const profile = "D:\\Google\\Chrome\\User Data\\Profile ";
const targetUrl = 'https://web.telegram.org/k/#@herewalletbot';
async function Run(profilePath) {
  let chromeOptions = new chrome.Options();
  chromeOptions.addArguments(`--user-data-dir=${profilePath}`);
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();

  try {
    // extension
    await driver.goto('chrome-extension://adlpodnneegcnbophopdmhedicjbcgco');
    await page.waitForSelector('.connect-button');
    await page.click('.connect-button');
    //end
    await driver.get("https://en.wikipedia.org/wiki/MP3");
  await driver.sleep(10000);

    // await driver.get("https://nordvpn.com/what-is-my-ip/");

    await driver.get(targetUrl);
    // await driver.quit();
  } catch (error) {
    console.log("[ERROR]", error);
  }
}

(async () => {
  // Run(`${profile}6`);
  // Run(`${profile}7`);
  // Run(`${profile}8`);
  Run(`${profile}6`);
  // Run(`${profile}10`);
})();


