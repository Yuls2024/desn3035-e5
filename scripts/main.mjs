import fs from 'fs';
import lighthouse from 'lighthouse';
import puppeteer from 'puppeteer';

// Launch the browser and open a new blank page
const browser = await puppeteer.launch();
const page = await browser.newPage();

const list = [
    "https: google.com"
    //multiple websites can go here
]

await page.goto('https://yuls2024.github.io/desn3035-e5/');
await page.setViewport({width: 1080, height: 1024});

await page.waitForNetworkIdle();
await page.screenshot({
    path: "auto_screenshot.png"
});

const options = {
    output: 'html'
};
const runnerResult = await lighthouse('https://yuls2024.github.io/desn3035-e5/', options, undefined, page);


const reportHtml = runnerResult.report;
fs.writeFileSync('auto_report.html', reportHtml);

await browser.close();