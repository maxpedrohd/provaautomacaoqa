const carrinhopageMap = require('../maps/carrinhopage.map');
const pageUtils = require('../utils/page.utils');
const expect = require('chai').expect;

class carrinhoPage {
    async validaProdutoCarrinho() {
        await pageUtils.waitPageLoadComplete();
        await browser.saveScreenshot('./screenshots/03_Produto no Carrinho.png');
        var elemCarrinho = await carrinhopageMap.itemCarrinho();
        expect(await elemCarrinho.isExisting()).to.be.true;
    }
}

module.exports = new carrinhoPage();