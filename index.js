const puppeteer = require('puppeteer-extra')
const $ = require('cheerio');
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const controller = require('./controller')
puppeteer.use(StealthPlugin())
//todo fix normal browser usage
function scrapeMovieLinks(url) {
    return new Promise(resolve => {
        let resolvearry = []
        let index1 = 0
        $('tr', url).each(function () {
            console.log(index1);
            index1++
            let innerarray = []
            let index = 0
            $('td', $(this)).each(function () {
                let urltocheck = $(this).attr('href')

                let dataarr = ["Publiceringsdatum", "Utgivare", "Person",
                    "Befattning", "Närstående", "Karaktär", "Instrumentnamn",
                    "ISIN", "Transaktionsdatum", "Volym", "Volymsenhet",
                    "Pris", "Valuta", "Handelsplats", "Status"]
                console.log("text  " + dataarr[index] + " " + $(this).text())
                innerarray[index] = $(this).text()
                index++
            });

            resolvearry.push(innerarray)
        });
        resolve(resolvearry)
    });
}
async function startscrape() {
    const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage()
    await page.goto("https://marknadssok.fi.se/publiceringsklient")
    let linkarray = await scrapeMovieLinks(await page.content())
    linkarray.forEach(element => {
        controller.upsert(element)
    });
    //console.table(linkarray)
}
startscrape()

//https://github.com/bvaughn/react-virtualized
//https://github.com/framer/motion