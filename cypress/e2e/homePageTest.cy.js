import viewPorts from "../fixtures/viewPorts.json"
import HomePage from "../support/pageObjects/homePage";
import NewInPage from "../support/pageObjects/newInPage";
import CollectionsPage from "../support/pageObjects/collectionsPage";
import PersonalPage from "../support/pageObjects/personalPage";
import BusinessesPage from "../support/pageObjects/businessesPage";
import TechTalkPage from "../support/pageObjects/techTalkPage";
import AboutUsPage from "../support/pageObjects/aboutUsPage";
import ContactPage from "../support/pageObjects/contactPage";
viewPorts.forEach((view) => {
  describe(`Elements on the home page`, () => {
    const homePage = new HomePage();
    const newInPage = new NewInPage();
    const collectionsPage = new CollectionsPage();
    const personalPage = new PersonalPage();
    const businessesPage = new BusinessesPage();
    const techTalkPage = new TechTalkPage();
    const aboutUsPage = new AboutUsPage();
    const contactPage = new ContactPage();

    beforeEach( async () => {
      await cy.clearCookies();
      homePage.visitHomePage();
      cy.viewport(view.width, view.height);
    });

    it('Home page should contain logo', () => {
      homePage.checkLogo();
    })

    it('Home page should contain valid title', () => {
      homePage.checkTitle();
    })

    it('Home page should contain currency button', () => {
      homePage.checkCurrencyDropDownButton();
    })

    it('NewIn button should redirect to it`s page', () => {
      homePage.clickNewInLink();
      cy.url().should('include', newInPage.url);
    })

    it('Collection button should redirect to it`s page', () => {
      homePage.clickCollectionsLink();

      cy.url().should('include', collectionsPage.url);
    })

    it('Personal button should redirect to it`s page', () => {
      homePage.clickPersonalButton();

      cy.url().should('include', personalPage.url);
    })

    it('Businesses button should redirect to it`s page', () => {
      homePage.clickBusinessesButton();

      cy.url().should('include', businessesPage.url);
    })

    it('Tech Talk button should redirect to it`s page', () => {
      homePage.clickTechTalkInButton();

      cy.url().should('include', techTalkPage.url);
    })

    it('About Us button should redirect to it`s page', () => {
      homePage.clickAboutUsButton();

      cy.url().should('include', aboutUsPage.url);
    })

    it('Contact button should redirect to it`s page', () => {
      homePage.clickContactButton();

      cy.url().should('include', contactPage.url);
    })
  })
})


