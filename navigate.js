//Navegando a través de una página web
//Puppeteer puede hacer clic en los enlaces para navegar a través de una página web. Aquí hay un ejemplo:

import puppeteer from "puppeteer";

async function navigateWebPage() {
  const browser = await puppeteer.launch({
    slowMo: 200,
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://quotes.toscrape.com");
  await page.click('a[href="/login"]');
  await new Promise((resolve) => setTimeout(resolve, 3000));
  await browser.close();
}

navigateWebPage();