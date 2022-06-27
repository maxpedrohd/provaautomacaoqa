class homePageMap {
    departClima() {
        return $(`*//div[@class='footer-nav']//*[@title='Climatização e Ventilação']/..`);
    }
}

module.exports = new homePageMap();