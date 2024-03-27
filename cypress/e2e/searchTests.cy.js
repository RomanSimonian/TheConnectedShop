import HomePage from "../support/pageObjects/homePage";


describe('Search teasts', () => {
    const homePage = new HomePage();

    it('search buttin displayed', () => {
        homePage.visitHomePage();

        cy.viewport(1280, 800);

        homePage.getSearchButton()
            .should('be.visible')
            .click();
    })

    it('search bar to be visible', () => {
        homePage.visitHomePage();

        cy.viewport(1280, 800);

        homePage.getSearchBar()
            .click()
            .type("banana");
    })
})