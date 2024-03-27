import HomePage from "../support/pageObjects/homePage";
import SearchResultPage from "../support/pageObjects/searchResultPage";


describe('Search teasts', () => {
    const homePage = new HomePage();
    const searchResultPage = new SearchResultPage();

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

    it('search bar functional', () => {
        homePage.visitHomePage();

        cy.viewport(1280, 800);

        searchResultPage.searchByName(homePage, 'Lock')

        cy.get(searchResultPage.fierstResultOfSearch)
            .contains('lock')
    })
})
