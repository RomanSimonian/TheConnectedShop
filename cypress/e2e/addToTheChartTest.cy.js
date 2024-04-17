import viewPorts from '../fixtures/viewPorts.json'
import users from '../fixtures/users.json'
import HomePage from "../support/pageObjects/homePage";
import {SearchResultPage} from "../support/pageObjects/searchResultPage";
import items from "../fixtures/item.json";
import {ProductPage} from "../support/pageObjects/productPage";

describe('add item to the chart', () => {
    const productPage = new ProductPage();
    const homePage = new HomePage();
    const searchResultPage = new SearchResultPage();

    beforeEach(() => {
        cy.clearCookies()
        homePage.visitHomePage();
        cy.viewport(viewPorts.width, viewPorts.height)
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })

    it('should add a new item to the chart', () => {
        searchResultPage.searchByName(homePage, items.name)

        cy.get(searchResultPage.fierstResultOfSearch)
            .contains(items.name);
        cy.get(searchResultPage.fierstResultOfSearch)
            .first()
            .click();
        cy.url().should("include", '/products/');

        cy.get(productPage.chartCounter).should('have.value', '');
        productPage.addToTheChart();
        cy.get(productPage.chartCounter).should('not.be.empty');
    })
});
