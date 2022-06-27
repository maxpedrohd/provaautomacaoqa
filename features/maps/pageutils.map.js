class pageUtilsMap {
    iconecarrinho() {
        return $(`*//div[@class='new-header-mobile-divisor right']/section/a`);
    }

    logo() {
        return $(".css-k3z3v5-wrapper-logo e1vdabx90");
    }
}

module.exports = new pageUtilsMap();