import viewports from '../fixtures/viewPorts.json';
import HomePage from "../support/pageObjects/homePage";
import SearchResultPage from "../support/pageObjects/searchResultPage";

viewports.forEach((view) => {
    describe('Search tests', () => {
        const homePage = new HomePage();
        const searchResultPage = new SearchResultPage();
        const param = [1280, 800];

        beforeEach( async () => {
            await cy.clearCookies();
            homePage.visitHomePage();
            cy.viewport(view.width, view.height);
        });

        it('search button displayed', () => {
            homePage.getSearchButton()
                .should('be.visible')
                .click();
        })

        it('search bar to be visible', () => {
            homePage.getSearchBar()
                .click()
                .type("banana");
        })

        it.only('search bar functional', () => {
            searchResultPage.searchByName(homePage, 'Lock')

            cy.get(searchResultPage.fierstResultOfSearch)
                .contains('lock')
        })
    })
})
