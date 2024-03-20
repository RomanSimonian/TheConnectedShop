import HomePage from "../support/pageObjects/homePage";
import NewInPage from "../support/pageObjects/newInPage";
import CollectionsPage from "../support/pageObjects/collectionsPage";
import PersonalPage from "../support/pageObjects/personalPage";
import BusinessesPage from "../support/pageObjects/businessesPage";
import TechTalkPage from "../support/pageObjects/techTalkPage";
import AboutUsPage from "../support/pageObjects/aboutUsPage";
import ContactPage from "../support/pageObjects/contactPage";

describe(`Elements on the home page`, () => {
  const homePage = new HomePage();
  const newInPage = new NewInPage();
  const collectionsPage = new CollectionsPage();
  const personalPage = new PersonalPage();
  const businessesPage = new BusinessesPage();
  const techTalkPage = new TechTalkPage();
  const aboutUsPage = new AboutUsPage();
  const contactPage = new ContactPage();

  /*it('Top panel of the Home Page elements visibility', () => {
    homePage.visitHomePage();

    homePage.checkHomeButton();
    homePage.checkNewInButton();
    homePage.checkCollectionsButton();
    homePage.checkPersonalButton();
    homePage.checkBusinessesButton();
    homePage.checkTechTalkInButton();
    homePage.checkAboutUsButton();
    homePage.checkContactButton();
    homePage.checkCallButton();
  })*/

  it('Home page should contain logo', () => {
    homePage.visitHomePage();
    homePage.checkLogo();
  })

  it('Home page should contain valid title', () => {
    homePage.visitHomePage();
    homePage.checkTitle();
  })

  it('Home page should contain currency button', () => {
    homePage.visitHomePage();

    cy.viewport(1280, 800);

    homePage.checkCurrencyDropDownButton();
  })

  it('NewIn button should redirect to it`s page', () => {
    homePage.visitHomePage();

    cy.viewport(1280, 800);

    homePage.clickNewInLink();

    cy.url().should('include', newInPage.url);
  })

  it('Collection button should redirect to it`s page', () => {
    homePage.visitHomePage();

    cy.viewport(1280, 800);

    homePage.clickCollectionsLink();

    cy.url().should('include', collectionsPage.url);
  })

  it('Personal button should redirect to it`s page', () => {
    homePage.visitHomePage();

    cy.viewport(1280, 800);

    homePage.clickPersonalButton();

    cy.url().should('include', personalPage.url);
  })

  it('Businesses button should redirect to it`s page', () => {
    homePage.visitHomePage();

    cy.viewport(1280, 800);

    homePage.clickBusinessesButton();

    cy.url().should('include', businessesPage.url);
  })

  it('Tech Talk button should redirect to it`s page', () => {
    homePage.visitHomePage();

    cy.viewport(1280, 800);

    homePage.clickTechTalkInButton();

    cy.url().should('include', techTalkPage.url);
  })

  it('About Us button should redirect to it`s page', () => {
    homePage.visitHomePage();

    cy.viewport(1280, 800);

    homePage.clickAboutUsButton();

    cy.url().should('include', aboutUsPage.url);
  })

  it('Contact button should redirect to it`s page', () => {
    homePage.visitHomePage();

    cy.viewport(1280, 800);

    homePage.clickContactButton();

    cy.url().should('include', contactPage.url);
  })

  /*it('should navigate to the home page when Home link is clicked within the active list item', () => {

    homePage.visitHomePage();

    cy.document().should('have.property', 'readyState', 'complete');

    cy.viewport(1280, 800);

    homePage.clickLinkInActiveItem('Collections');
    cy.url().should('eq', 'https://theconnectedshop.com/pages/products'); 
  });*/


})