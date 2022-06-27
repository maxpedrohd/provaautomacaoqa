const { Given, When, Then} = require('@wdio/cucumber-framework');
const carrinhopagePage = require('../pages/carrinhopage.page');

const openPage = require('../pages/homepage.page');
const productpagePage = require('../pages/productpage.page');
const pageUtils = require('../utils/page.utils');

Given('Eu acesso o site LeroyMerlin', async () => {
    await openPage.homePage();
});

When('Selecionar um produto', async () => {
    await pageUtils.homeActions();
});

When('Clicar em comprar', async () => {
    await productpagePage.comprar();
});

Then('Verifico que o produto estar no carrinho', async () => {
    await carrinhopagePage.validaProdutoCarrinho();
})