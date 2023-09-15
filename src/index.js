const puppeteer = require('puppeteer');

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://edition.cnn.com/search?q=africa");

    // Wait for 5 seconds
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Extract the content of the element with class 'search__results'
    const searchResultsContent = await page.$eval('.search__results', element => element.textContent);
    console.log(searchResultsContent);

    browser.close();
}

run();