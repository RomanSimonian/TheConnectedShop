class HomePage{

    constructor(){
        this.url = 'https://theconnectedshop.com/';
        this.logo = 'img.Header__LogoImage--transparent';
        this.expectedTitle = `The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office`
        this.currencyDropDownButton = '.SelectButton'
        this.hurizenItem = 'li.HorizontalList__Item';
        this.u_h6Element = 'a.Heading.u-h6';
        this.collectionsButton = '.placeholder'
        this.newInButton = '.placeholder'
        this.homeButton = '.placeholder'
        this.personalButton = '.placeholder'
        this.businessesButton = '.placeholder'
        this.techTalkButton = '.placeholder'
        this.aboutUsButton = '.placeholder'
        this.contactButton = '.placeholder'
        this.callButton = '.placeholder'
    }
     
    clickLinkInActiveItem(linkText) {
        cy.get('HorizontalList__Item is-active').within(() => {
            cy.contains('a.Heading.u-h6', linkText).click();
        });
    }

    visitHomePage(){
        cy.visit(this.url)
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

    checkCurrencyDropDownButton(){
        cy.get(this.checkCurrencyDropDownButton)
        .first()
        .should('be.visible');
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
}
export default HomePage;