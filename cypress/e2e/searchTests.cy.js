import viewports from '../fixtures/viewPorts.json';
import items from '../fixtures/item.json';
import HomePage from "../support/pageObjects/homePage";
import SearchResultPage from "../support/pageObjects/searchResultPage";

viewports.forEach((view) => {
    describe('Search tests', () => {
        const homePage = new HomePage();
        const searchResultPage = new SearchResultPage();

        beforeEach(() => {
            cy.clearCookies();
            homePage.visitHomePage();
            cy.viewport(view.width, view.height);
        });

        // it('search button displayed', () => {
        //     homePage.getSearchButton()
        //         .should('be.visible')
        //         .click();
        // })
        //
        // it('search bar to be visible', () => {
        //     homePage.getSearchBar()
        //         .click()
        //         .type("banana");
        // })

        it('search bar functional', () => {
            searchResultPage.searchByName(homePage, items.name)

            cy.get(searchResultPage.fierstResultOfSearch)
                .contains(items.name)
        })
    })
})
