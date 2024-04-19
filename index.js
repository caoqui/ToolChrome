const { Builder, By, until } = require("selenium-webdriver");

const chrome = require("selenium-webdriver/chrome");
const profileLink = "D:\\Google\\Chrome\\User Data\\Profile 3";

async function Run(profilePath) {
  let chromeOptions = new chrome.Options();
  chromeOptions.addArguments(`--user-data-dir=${profilePath}`);
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();

  try {
    await driver.get("https://en.wikipedia.org/wiki/MP3");
    await driver.sleep(10000);
    // open telegram
    await driver.get("https://web.telegram.org/k/#@herewalletbot");
    await driver.sleep(1000);
    await driver.findElement(By.className("reply-markup-row")).click();
    await driver.sleep(1000);
    await driver
      .findElement(By.className("popup-button btn primary rp"))
      .click();
    await driver.sleep(2000);
    await driver.wait(until.elementLocated(By.tagName("iframe")), 10000);
    const iframe = await driver.findElement(By.tagName("iframe"));
    await driver.switchTo().frame(iframe);
    const h4Element = await driver.findElement(By.className("sc-eqUAAy"));
    h4Element.click();

    try {
      let checkNewsButton = await driver.wait(
        until.elementLocated(
          By.xpath("//button[contains(text(), 'Check NEWS')]")
        ),
        10000
      );
      await checkNewsButton.click();
    } catch (error) {}

    await driver.sleep(2000);
    let claimButton = await driver.wait(
      until.elementLocated(By.xpath("//button[contains(text(), 'Claim HOT')]")),
      10000
    );
    await claimButton.click();
    await driver.sleep(5000);
    await driver.quit();
  } catch (error) {
    console.log("[ERROR]");
  }
}


Run(profileLink)