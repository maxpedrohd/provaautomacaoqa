const arcondpageMap = require('../maps/arcondpage.map');
const climaeventpageMap = require('../maps/climaeventpage.map');
const homepageMap = require('../maps/homepage.map');
const pageutilsMap = require('../maps/pageutils.map');
const HomePage = require('../pages/homepage.page');

class PageUtils {
    async homeActions() {
        await this.waitPageLoadComplete();
        await browser.saveScreenshot('./screenshots/01_Acesso a Home Leroy com Sucesso.png');
        const elem = await $('.footer-nav');
        await elem.scrollIntoView();
        var elemDepart = await homepageMap.departClima();
        await elemDepart.click();
        await browser.pause(3000);
        var elemArCond = await climaeventpageMap.arCond();
        await elemArCond.click();
        await browser.pause(2000);
        var elemProd = await arcondpageMap.productSelected();
        await elemProd.click();
        // await browser.pause(5000);
        await browser.saveScreenshot('./screenshots/02_Produto Selecionado.png');
    }

    async waitPageLoadComplete() {
        await browser.waitUntil(
            async () => await browser.execute(async() => await document.readyState === 'complete'),
            {
                timeout: 60 * 1000, // 60 seconds
                timeoutMsg: 'Página não carregou!!'
            }
        );
    }
}

module.exports = new PageUtils();