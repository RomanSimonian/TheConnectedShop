export class SearchResultPage {
    constructor() {
        this.fierstResultOfSearch = 'h2[class = \'ProductItem__Title Heading\']'
    }

    searchByName(homePage, name){
        homePage.getSearchBar()
            .type(name)
            .type('{enter}');

        cy.document().should('have.property', 'readyState', 'complete');
    }
}
