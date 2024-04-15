class HomePage{

    constructor(){
        this.theConnectedShopURL = 'https://theconnectedshop.com/';
        this.logo = 'img.Header__LogoImage--transparent';
        this.expectedTitle = `The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office`
        this.currencyDropDownButton = '.SelectButton'
        this.hurizenItem = 'li.HorizontalList__Item';
        this.u_h6Element = 'a.Heading.u-h6';
        this.searchButton = 'a[href="/search"]';
        this.searchBarHeader = 'div[id=\'Search\']';
        this.searchBar = 'input[class=\'Search__Input Heading\']';
        this.homeButton = '.placeholder'
    }

    visitHomePage(){
        cy.visit(this.theConnectedShopURL)
        cy.document().should('have.property', 'readyState', 'complete');
    }

    checkTitle(){
        cy.title().should(`eq`, this.expectedTitle)
    }

    checkLogo(){
        cy.get(this.logo)
        .should('be.visible')
        .and(($img) => {
            const logoWidth = Cypress.$($img).width();  
            expect(logoWidth).to.be.greaterThan(0);
          });
    }

    checkHomeButton(){
        cy.get(this.homeButton)
        .first()
        .should('be.visible');
    }

    clickCollectionsLink(){
        cy.get(this.hurizenItem)
            .contains(this.u_h6Element, 'Collections')
            .click();
    }

    clickNewInLink(){
        cy.get(this.hurizenItem)
            .contains(this.u_h6Element, 'New In')
            .click();
    }

    clickPersonalButton(){
        cy.get(this.hurizenItem)
            .contains(this.u_h6Element, 'Personal')
            .click();
    }

    clickBusinessesButton(){
        cy.get(this.hurizenItem)
            .contains(this.u_h6Element, 'Businesses')
            .click();
    }

    clickTechTalkInButton(){
        cy.get(this.hurizenItem)
            .contains(this.u_h6Element, 'Tech Talk')
            .click();
    }

    clickAboutUsButton(){
        cy.get(this.hurizenItem)
            .contains(this.u_h6Element, 'About us')
            .click();
    }

    clickContactButton(){
        cy.get(this.hurizenItem)
            .contains(this.u_h6Element, 'Contact')
            .click();
    }

    getSearchButton(){
        return cy.get(this.searchButton)
            .first();
    }

    getSearchBar(){
        cy.get(this.searchButton)
            .first()
            .click();

        return cy.get(this.searchBar);
    }
}
export default HomePage;
