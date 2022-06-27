class openHomePage {
    async homePage() {
        await browser.url(`https://www.leroymerlin.com.br/`)
    }
}

module.exports = new openHomePage();