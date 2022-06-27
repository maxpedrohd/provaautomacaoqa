class climaVentPageMap {
    arCond(){
        return $(`*//img[@title='Ar Condicionado']`);
    }
}

module.exports = new climaVentPageMap();