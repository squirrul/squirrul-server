const puppeteer = require('puppeteer')
// const devices = require('puppeteer/DeviceDescriptors');

async function screenshot(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.emulate(devices['iPhone 6']);
  await page.goto(url, {waitUntil: 'networkidle'});
  await page.screenshot({path: 'full.png', fullPage: true, width: 1200})
  await page.screenshot({path: 'thumb.png', width: 800, height: 600})
  await browser.close()
}

module.exports = screenshot
