// Obteniendo datos de una página web
// Para hacer web scraping, necesitas obtener datos de la página web. 
// Puedes hacerlo con Puppeteer de la siguiente manera:

import puppeteer from "puppeteer";

async function getDataFromWebPage() {
  const browser = await puppeteer.launch({
    headless: false,
  })
  const page = await browser.newPage();

  await page.goto('https://www.topdoctors.cl/ginecologia-y-obstetricia/');

  const result = await page.evaluate(() => {
    const title = document.querySelector('h2').innerText;
    const description = document.querySelector('p').innerText;
    return {
      title,
      description,
    }
  });
  console.log(result);

  await browser.close();
}

getDataFromWebPage();


// En este código, la función page.evaluate() se usa para ejecutar código en el contexto del navegador. 
// Dentro de esta función, puedes usar el DOM API para interactuar con la página web.