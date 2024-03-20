describe(`Elements on the home page`, ()=> {
    it("Home page should contain valid title", () => {
        cy.visit("https://theconnectedshop.com/");
        cy.title().should(`eq`, `The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office`);
    })
    
    it(`Home page should contain logo`, ()=> {
        cy.visit(`https://theconnectedshop.com/`);
        //cy.get(`.Header__LogoImage--primary`).should('be');

        cy.document().should('have.property', 'readyState', 'complete');

       /* cy.get('img.Header__LogoImage--primary')
      .should('be.visible')
      .and(($img) => {
       
        const logoWidth = Cypress.$($img).width();
        expect(logoWidth).to.be.greaterThan(0);
      });*/

      cy.get('img.Header__LogoImage--transparent')
      .should('be.visible')
      .and(($img) => {

        const logoWidth = Cypress.$($img).width();  
        expect(logoWidth).to.be.greaterThan(0);
      });
    })

    it ('Home page should contain currency button', () => {
      cy.visit('https://theconnectedshop.com/')

      cy.get('.SelectButton.Link.Link--primary.u-h8')
      .should('be.visible')
    })
    //
})