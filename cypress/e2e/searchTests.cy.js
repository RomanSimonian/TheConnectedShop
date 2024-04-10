import HomePage from "../support/pageObjects/homePage";
import SearchResultPage from "../support/pageObjects/searchResultPage";


describe('Search tests', () => {
    const homePage = new HomePage();
    const searchResultPage = new SearchResultPage();
    const param = [1280, 800];

    it('search button displayed', () => {
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

    it.only('search bar functional', () => {
        homePage.visitHomePage();

        cy.viewport(param[0], param[1]);

        cy.debug(cy.log(param[1]));
        searchResultPage.searchByName(homePage, 'Lock')

        cy.get(searchResultPage.fierstResultOfSearch)
            .contains('lock')
    })
})
