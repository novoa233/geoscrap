// Captura de Pantalla con Puppeteer
// Puppeteer tiene un método incorporado llamado screenshot() para tomar una captura de pantalla de la página web. 
// Aquí te muestro cómo puedes hacerlo:

import puppeteer from "puppeteer";

async function captureScreenshot() {
  const browser = await puppeteer.launch({
    headless: 'new'
  });
  const page = await browser.newPage();
  await page.goto('https://www.example.com');
  await page.screenshot({path: 'example.png'});
  await browser.close();
}

captureScreenshot();