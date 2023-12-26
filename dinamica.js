//codigo que extrae nombre, especialidad y deireccion de un pagina en concreto
//de doctoralia, es decir, se debe inngresar la pagina a scrapear en "await page.goto"
//y en la consola lanzarlo con "node dinamica.js"
import puppeteer from "puppeteer";

async function handleDynamicWebPage() {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100
  })
  const page = await browser.newPage();

  await page.goto('https://www.doctoralia.cl/buscar?q=Neur%C3%B3logo&loc=Talca&filters%5Bspecializations%5D%5B%5D=40');

  const result = await page.evaluate(() => {
    const pr = document.querySelectorAll(".card-body.p-0");
    const data = [...pr].map((pr) => {
        const prNombre = pr.querySelector(".h4").innerText
        const prEspecialidad = pr.querySelector('.h5').innerText
        const prDireccion = pr.querySelector('.text-truncate').innerText
    //   const prMapa = pr.querySelector('.address-map-link').innerText
    // const prTelefono = pr.querySelector('.text').innerText
    // const prTags = pr.querySelectorAll('.text').map(tag => tag.innerText)          
        return {
        prNombre,
        prEspecialidad,
        prDireccion,
        //prMapa,
        
      }    
    });
    return data
  });
  console.log(result);

  await browser.close()
}

handleDynamicWebPage()


