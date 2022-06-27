const productpageMap = require("../maps/productpage.map");

class productPage {
    async comprar() {
        var botComprar = await productpageMap.btnComprar();
        await botComprar.click();
        await browser.pause(2000);
        var botCarrinho = await productpageMap.btnIrCarrinho();
        await botCarrinho.click();
        await browser.pause(2000);
    }
}

module.exports = new productPage();