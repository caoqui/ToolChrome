const { Builder, By, until } = require("selenium-webdriver");

const chrome = require("selenium-webdriver/chrome");
const profile = "D:\\Google\\Chrome\\User Data\\Profile ";

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
    let openWalletButton = await driver.findElement(
      By.xpath(
        '//a[contains(@class, "reply-markup-button") and contains(@href, "herewalletbot/app")]'
      )
    );
    await openWalletButton.click();
    // await driver.findElement(By.className("reply-markup-row")).click();
    await driver.sleep(7000);
    await driver
      .findElement(By.className("popup-button btn primary rp"))
      .click();
    await driver.sleep(2000);
    console.log("FLAG");
    await driver.wait(until.elementLocated(By.tagName("iframe")), 10000);
    const iframe = await driver.findElement(By.tagName("iframe"));
    await driver.switchTo().frame(iframe);
    console.log("FLAG2");
    await driver.wait(until.elementLocated(By.xpath('//h4[contains(text(), "Storage")]')), 10000);

    // Kích vào phần tử Storage
    await driver.findElement(By.xpath('//h4[contains(text(), "Storage")]')).click();
    console.log("FLAG3");
    // try {
    //   let checkNewsButton = await driver.wait(
    //     until.elementLocated(
    //       By.xpath("//button[contains(text(), 'Check NEWS')]")
    //     ),
    //     10000
    //   );
    //   await checkNewsButton.click();
    // } catch (error) {}

    await driver.sleep(10000);
    let claimButton = await driver.wait(
      until.elementLocated(By.xpath("//button[contains(text(), 'Claim HOT')]")),
      10000
    );
    await claimButton.click();
    await driver.sleep(5000);
    await driver.quit();
  } catch (error) {
    console.log("[ERROR]", error);
  }
}

(async () => {
  await Run(`${profile}1`);
  await Run(`${profile}2`);
  await Run(`${profile}3`);
  await Run(`${profile}4`);
  await Run(`${profile}5`);
})();
