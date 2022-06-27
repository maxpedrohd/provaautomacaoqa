class productPageMap {
    btnComprar() {
        return $(`*//button[@class ='buy-button button button-primary button-full button-large align-left ']`);
    }

    btnIrCarrinho() {
        return $(`*//a[@data-cy='redirect-to-cart-button']`);
    }
}

module.exports = new productPageMap();